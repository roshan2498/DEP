//http://www.codewars.com/kata/array-helpers

function checkArr(arr) {
  return (
    Array.isArray(arr) ||
    Object.prototype.toString.call(arr) === "[object Array]"
  );
}

let arrProto = Array.prototype;

arrProto.square = function () {
  if (checkArr(this)) {
    return this.map((item) => {
      return Math.pow(item, 2);
    });
  } else {
    throw "params must be a array";
  }
};

arrProto.cube = function () {
  if (checkArr(this)) {
    return this.map((item) => {
      return Math.pow(item, 3);
    });
  } else {
    throw "params must be a array";
  }
};

arrProto.sum = function () {
  if (checkArr(this)) {
    return this.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
  } else {
    throw "params must be a array";
  }
};

arrProto.average = function () {
  if (checkArr(this)) {
    return this.sum() / this.length;
  } else {
    throw "params must be a array";
  }
};

arrProto.even = function () {
  if (checkArr(this)) {
    return this.filter((item) => {
      return item % 2 === 0;
    });
  } else {
    throw "params must be a array";
  }
};

arrProto.odd = function () {
  if (checkArr(this)) {
    return this.filter((item) => {
      return item % 2 !== 0;
    });
  } else {
    throw "params must be a array";
  }
};
