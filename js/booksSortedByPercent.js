// 16. Given the list of the following readers:
// Output the books sorted by the percent in descending order which readStatus is true.

function sortByPercent(inpArrOfObj) {
  let resArr = [];
  for (let i = 0; i < inpArrOfObj.length; i++) {
    if (inpArrOfObj[i].readStatus) {
      resArr.push(inpArrOfObj[i]);
    }
  }
  return resArr.sort((a, b) => (a.percent > b.percent ? -1 : 1));
}

console.log(
  sortByPercent([
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
  ])
);
