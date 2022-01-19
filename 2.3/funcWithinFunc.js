// http://www.codewars.com/kata/a-function-within-a-function

function always(n) {
  const f = () => n;
  return f;
}
