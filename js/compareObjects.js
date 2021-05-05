// 17. Given two objects. Write a function that performs shallow compare.

function compareObjects(obj1, obj2) {
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    return true;
  }
  return false;
}

console.log(compareObjects({ a: "1" }, { a: "1", b: "2" }));
