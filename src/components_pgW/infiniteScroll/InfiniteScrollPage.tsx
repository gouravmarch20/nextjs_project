"use client";
import React, { useEffect, useState, useRef } from "react";
type imageD = {
  author: string;
  download_url: string;
  height: string;
  id: string;
  url: string;
  width: number;
};

const InfiniteScrollPage = () => {
  const [data, setData] = useState<imageD[] | []>([]);
  const [pageNo, setPageNo] = useState(0);
  const observerLastElement = useRef(null);
  const handleFetch = (pageNo: number) => {
    const nextPage = pageNo + 1;
    fetch(`https://picsum.photos/v2/list?page=${nextPage}&limit=5`)
      .then((res) => res.json())
      .then((r) => {
        console.log("infi", r);
        setData((p) => [...p, ...r]);
      });
    return () => {};
  };
  console.log("data", data);
  useEffect(() => {
    handleFetch(pageNo);
  }, [pageNo]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (el) => {
        if (el?.[0]?.isIntersecting) {
          // handleFetch();
          setPageNo((prev) => prev + 1);
        }
      },
      {
        threshold: 1,
      }
    );

    if (observerLastElement.current) {
      obs.observe(observerLastElement.current);
    }
    return () => {
      if (observerLastElement.current) {
        obs.unobserve(observerLastElement.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-2">
        {data?.map((d) => (
          <div
            key={d.id + Math.random() * 10}
            className="h-[400px] image-container p-2"
          >
            {d.author}
            <img src={d.download_url} className="w-[200px] h-[430px]" />
          </div>
        ))}
      </div>
      <div ref={observerLastElement} className="h-3 bg-red-500">
        lfsa
      </div>
    </div>
  );
};

export default InfiniteScrollPage;
