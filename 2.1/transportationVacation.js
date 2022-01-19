// http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
  //   40$ for one day
  //   7 >= 50$ off
  //   3 >= 20$ off
  var total = d * 40;
  if (d >= 7) {
    return total - 50;
  }
  if (d >= 3) {
    return total - 20;
  }

  return total;
}
