// 15. Given an object. Invert it (keys become values and values become keys). If there is more than key forthat
// given value create an array.

function invertObjKeyVals(inpObj) {
  let outObj = {};
  for (key in inpObj) {
    if (inpObj[key] in outObj) {
      outObj[inpObj[key]] = [...outObj[inpObj[key]], key];
    } else outObj[inpObj[key]] = key;
  }
  return outObj;
}

console.log(invertObjKeyVals({ a: "1", b: "2", c: "2", d: "2" }));
