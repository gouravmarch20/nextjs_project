"use client";
import React, { useEffect, useState } from "react";
import { calculatePagination } from "./helper";
import { PREV_NEXT, MAX_PAGE_NO, NEXT_LIMIT, ImageType } from "./pageContant";
// const API_IMG_PATH = "https://picsum.photos/v2/list?page={}&limit=10"

const PaginationPage = () => {
  const [activePageNo, setActivePageNo] = useState<number>(3);
  const [pageList, setPageList] = useState<number[]>();
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://picsum.photos/v2/list?page=${activePageNo}&limit=10`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch cancelled");
        }
      });

    return () => {
      controller.abort(); // ✅ Cancel fetch on unmount
    };
  }, [activePageNo]);

  useEffect(() => {
    setPageList(calculatePagination(activePageNo));
  }, [activePageNo]);

  return (
    <>
      <div className="grid grid-cols-5 gap-2 mt-4 w-[400px] h-[300px]" >
        {images.map((img) => (
          <img
            key={img.id}
            src={img.download_url}
            alt={img.author}
            loading="lazy"
            className="w-full h-32 object-cover"
          />
        ))}
      </div>
      <div className="flex gap-2 ">
        {activePageNo != 0 && (
          <button
            className="bg-indigo-500 p-2"
            onClick={() => setActivePageNo((prev) => prev - 1)}
          >
            prev
          </button>
        )}

        {pageList?.map((pageNo, ind) => (
          <div
            key={pageNo}
            className={` w-[30px] text-center p-2 ${
              pageNo == activePageNo ? "bg-green-700" : "bg-red-500"
            }`}
            onClick={() => setActivePageNo(pageNo)}
          >
            {pageNo}
          </div>
        ))}
        {activePageNo != MAX_PAGE_NO && (
          <button
            className="bg-indigo-500 p-2"
            onClick={() => setActivePageNo((prev) => prev + 1)}
          >
            next
          </button>
        )}
      </div>
    </>
  );
};

export default PaginationPage;
