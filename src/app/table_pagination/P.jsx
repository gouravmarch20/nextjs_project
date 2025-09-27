// import "./Pagination.css";
const Pagination = ({ currentPage, totalPage, handlePageChange }) => {
  const makeUi = (currP) => {
    let res = [];
    // prev case
    if (currP == 1) {
    } else if (currP == 2) {
      res.push(1);
    } else if (currP > 2) {
      res.push(...[currP - 2, currP - 1]);
    }

    res.push(currP);

    // next case

    if (totalPage == currP) {
      // res.push([1])
    } else if (totalPage - 1 == currP) {
      res.push(...[totalPage]);
    } else if (currP < totalPage - 2) {
      //   res.push("__");

      res.push(...[currP + 1, currP + 2]);
      res.push("___");

      res.push(...[totalPage - 1, totalPage]);
    }
    return res;

    //
  };

  // const showPage = ()=>{
  //     currentPage
  // }
  console.log("deb", makeUi(currentPage));
  const handlePage = (m) => {
    if (m != "_" || m != "__") {
      handlePageChange(m);
    }
  };
  return (
    <div className="pagination">
      <div
        onClick={() => {
          handlePageChange(currentPage - 1);
        }}
      >
        {" "}
        Prev{" "}
      </div>

      {/* <div> {currentPage} </div> */}
      {/* 5 min debug */}
      {makeUi(currentPage)?.map((m) => (
        <div
          key={m}
          onClick={() => handlePage(m)}
          style={{
            // currentPage == m ? backgournd : red
            background: currentPage === m ? "red" : "",
          }}
        >
          {m === "_" || m === "__" ? "-::-" : m}
        </div>
      ))}

      <div
        onClick={() => {
          handlePageChange(currentPage + 1);
        }}
      >
        {" "}
        Next{" "}
      </div>
    </div>
  );
};
export default Pagination;
