"use client";
type productDataType = {
  availabilityStatus: string;
  images: string[];
  id: number;
  description: string;
  title: string;
};
type searchType = productDataType[];
import React, { useState, useEffect, useRef, useCallback } from "react";
import useDebounce from "./useDebounce";
import useCache from "./useCache";
import useOutsideClick from "./useOutsideClick";

const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState<searchType>([]);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [searchApiStatus, setSearchApiStatus] = useState<
    "LOADING" | "ERROR" | "SUCCESS"
  >("LOADING");
  const abortRef = useRef<AbortController | null>(null);

  const getSearchResult = (input: string) => {
    if (abortRef.current) {
      abortRef.current.abort();
    }

    const controller = new AbortController();
    abortRef.current = controller;
    setSearchApiStatus("LOADING");

    fetch(`https://dummyjson.com/products/search?q=${input}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        putInCache(input, res?.products);
        setSearchResult(res?.products);
        setSearchApiStatus("SUCCESS");
      })
      .catch((error) => {
        if (error.name === "AbortError") return; // silently ignore aborts
        setSearchApiStatus("ERROR");
      });
  };
  // useEffect(() => {
  //   const cacheR = hasCache(searchInput);
  //   if (cacheR) {
  //     setSearchResult(cacheR);
  //   } else {
  //     debouncedInput(searchInput);
  //   }
  //   setShowSearchResult(true);

  //   return () => {
  //     if (abortRef.current) {
  //       abortRef.current.abort();
  //     }
  //   };
  // }, [searchInput]);
  const [selectedInd, setSelectedInd] = useState(0);
  const debouncedInput = useDebounce(searchInput, 1000);
  console.log("debouncedInput" , debouncedInput)
  const { hasCache, putInCache } = useCache();

  const searchBarRef = useOutsideClick(() => {
    setShowSearchResult(false);
  });
  const compare = (title: string, i: number, searchInput: string) => {
    let theS = title.slice(i, i + searchInput.length);
    if (theS == searchInput) {
      return true;
    }
    return false;
  };
  const highlightText = useCallback(
    (title: string) => {
      let tempSearchInput = searchInput.toLowerCase();
      if (!tempSearchInput.length) {
        return title
          .split("")
          .map((char, idx) => <span key={idx}>{char}</span>);
      }
      const result = [];
      let i = 0,
        n = title.length;
      while (i < n) {
        if (compare(title, i, tempSearchInput)) {
          result.push(
            <span key={i} className="text-blue-600">
              {title.slice(i, i + tempSearchInput.length)}
            </span>
          );
          i += tempSearchInput.length;
        } else {
          result.push(<span key={i}>{title[i]}</span>);
          i++;
        }
      }

      return result;
    },
    [searchInput]
  );
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "ArrowDown") {
      setSelectedInd((prev) => {
        if (searchResult?.length - 1 <= prev) {
          return 0;
        }
        return prev + 1;
      });
    } else if (e.key == "ArrowUp") {
      setSelectedInd((prev) =>
        prev == 0 ? searchResult.length - 1 : prev - 1
      );
    } else if ((e.key === "Enter" || e.key === "Esc") && selectedInd !== -1) {
      const selected = searchResult[selectedInd]?.title;
      if (selected) {
        setSearchInput(selected);
      }
      setShowSearchResult(false);

      setSearchResult([]);
    }
  };

  useEffect(() => {
    if (!debouncedInput.trim()) return;

    const cacheR = hasCache(debouncedInput);
    if (cacheR) {
      setSearchResult(cacheR);
      setSearchApiStatus("SUCCESS");
    } else {
      getSearchResult(debouncedInput);
    }

    setShowSearchResult(true);

    return () => {
      abortRef.current?.abort();
    };
  }, [debouncedInput]);

  console.log("searchResult", searchResult, searchResult?.length);
  return (
    <div>
      <h1>dafds</h1>
      <input
        className="border border-grey-200 w-100 p-2"
        placeholder="search here"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      />
      {searchApiStatus == "LOADING" && <div>Loading...</div>}
      {showSearchResult &&
        searchResult &&
        searchApiStatus == "SUCCESS" &&
        searchResult?.length > 0 && (
          <div className="flex  flex-col gap-2 " ref={searchBarRef.elementRef}>
            {searchResult?.map((s, idx) => (
              <div
                key={s.id}
                className={`flex  bg-amber-200  ${
                  idx == selectedInd ? "bg-blue-500" : ""
                }`}
              >
                <img
                  src={s.images?.[0]}
                  className="w-[20px] "
                  alt="no i"
                  loading="lazy"
                />
                <div>{highlightText(s.title)?.map((s) => s)} </div>
                <h3>{idx}</h3>
              </div>
            ))}
          </div>
        )}

      {searchApiStatus === "ERROR" && (
        <div>
          <p>Failed to fetch results.</p>
          <button onClick={() => getSearchResult(searchInput)}>Retry</button>
        </div>
      )}
    </div>
  );
};
export default SearchBar;
