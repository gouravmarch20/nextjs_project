const compare = (title, i, searchInput) => {
  let theS = title.slice(i, i + searchInput.length);
  if (theS == searchInput) {
    return true;
  }
  return false;
};
const highlightText = (title) => {
  let searchInput = "pp";
  const result = [];
  let i = 0,
    n = title.length;
  while (i < n) {
    if (compare(title, i, searchInput)) {
      result.push(
        `<span className="text-blue-600">
          ioi
          {/* {title.slice(i, i + searchInput.length)} */}
        </span>`
      );
    } else {
      result.push(`<span>i</span>`);
      i++;
    }
  }

  console.log("th", result);
};
highlightText("ppitppatpp");
// const compare = (title, i, searchInput) => {
//   const theS = title.slice(i, i + searchInput.length);
//   return theS === searchInput;
// };

// const highlightText = (title) => {
//   const searchInput = "pp";
//   const result = [];

//   let i = 0;
//   while (i < title.length) {
//     if (compare(title, i, searchInput)) {
//       result.push(
//         `<span class="text-blue-600">${title.slice(i, i + searchInput.length)}</span>`
//       );
//       i += searchInput.length; // ✅ advance by length of match
//     } else {
//       result.push(title[i]);
//       i++;
//     }
//   }

//   const finalHTML = result.join(""); // ✅ combine the array
//   console.log(finalHTML);
//   return finalHTML;
// };

// highlightText("ppitppatpp");
