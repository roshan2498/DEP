// http://www.codewars.com/kata/extract-nested-object-reference

// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function (s) {
  let obj = this;
  s.split(".").forEach(function (el) {
    try {
      obj = obj[el];
    } catch (e) {
      console.log(e);
      obj = undefined;
    }
  });

  return obj;
};
