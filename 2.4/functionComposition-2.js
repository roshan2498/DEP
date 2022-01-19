// https://www.codewars.com/kata/function-composition-1

const compose =
  (...fns) =>
  (arg) =>
    fns.reduceRight((res, fn) => fn(res), arg);
