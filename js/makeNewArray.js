// 9. Write a function which receives an array and a number as arguments and returns a new array from the
// elements of the given array which are larger than the given number.

function makeArrayLargerThanNumb(array, number) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      res.push(array[i]);
    }
  }
  if (res.length === 0) {
    return "Such values don't exist";
  } else {
    return res;
  }
}

console.log(makeArrayLargerThanNumb([1, 1, 2, -3, 0, 8, 4, 0], 9));
