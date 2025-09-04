import { PREV_NEXT, MAX_PAGE_NO, NEXT_LIMIT } from "./pageContant";

export const calculatePagination = (activePageNo: number) => {
  let prevPage = [];
  let nextPage = [];
  let cnt = 0;

  for (let i = activePageNo - 1; i >= 0 && cnt < PREV_NEXT; i--, cnt++) {
    prevPage.push(i);
  }

  cnt = 0;
  for (
    let i = activePageNo + 1;
    i <= MAX_PAGE_NO && cnt < NEXT_LIMIT;
    i++, cnt++
  ) {
    nextPage.push(i);
  }

  return [...prevPage.reverse(), activePageNo, ...nextPage];
};
