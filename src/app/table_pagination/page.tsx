import React, { useEffect, useState } from "react";
// import PaginationPage from "@/components_pgW/pagination/PaginationPage";
import T from "./T";
import P from "./P";

const Pagination = () => {
  const [pageNo, setPageNo] = useState(1);
  const [tableD, setTableD] = useState(1);
  const handlePageChange = (page: any) => {
    setPageNo(page);
  };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNo}&_limit=2`)
      .then((p) => p.json())
      .then((p) => setTableD(p));
  }, [pageNo]);
  return (
    <div>
      <T tableD={tableD} />
      <P
        currentPage={pageNo}
        totalPage={100}
        handlePageChange={(p) => handlePageChange(p)}
      />
    </div>
  );
};

export default Pagination;
