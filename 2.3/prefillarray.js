// http://www.codewars.com/kata/prefill-an-array

function prefill(n, v) {
  if (parseInt(n) !== Math.abs(n)) {
    throw new TypeError(`${n} is invalid`);
  }

  return +n ? new Array(n).fill(v) : [];
}
