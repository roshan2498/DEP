// http://www.codewars.com/kata/new-with-apply

function construct(Class) {
  var obj = Object.create(Class.prototype);
  Class.apply(obj, Array.prototype.slice.call(arguments, 1));
  return obj;
}
