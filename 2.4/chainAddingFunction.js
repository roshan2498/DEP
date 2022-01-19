// http://www.codewars.com/kata/a-chain-adding-function

function add(x) {
  // Let the currying begin!
  let sum = x;
  function resultFn(y) {
    sum += y;
    return resultFn;
  }

  resultFn.valueOf = function () {
    return sum;
  };

  return resultFn;
}
