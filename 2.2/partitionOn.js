// http://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
  var cnt = 0,
    newItems = [];
  items.forEach((item) => {
    if (!pred(item)) {
      cnt++;
      newItems.push(item);
    }
  });

  items.forEach((item) => {
    if (pred(item)) {
      newItems.push(item);
    }
  });
  for (var i = 0; i < items.length; i++) {
    items[i] = newItems[i];
  }
  return cnt;
}
