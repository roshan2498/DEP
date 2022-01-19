// http://www.codewars.com/kata/function-cache

function cache(func) {
  // do your magic here
  var storage = {};
  return function () {
    var keyMemoized = JSON.stringify(arguments);
    return keyMemoized in storage
      ? storage[keyMemoized]
      : (storage[keyMemoized] = func.apply(this, arguments));
  };
}
