// minimize memory usage or computational expenses by sharing as much
// as possible with similar objects.

// Anything that will be cached is flyweight.
// Types of tea here will be flyweights.

class KarakTea {}

// Acts as a factory and saves the tea
class TeaMaker {
  constructor() {
    this.availableTea = {};
  }

  make(preference) {
    this.availableTea[preference] =
      this.availableTea[preference] || new KarakTea();
    return this.availableTea[preference];
  }
}

class TeaShop {
  constructor(teaMaker) {
    this.teaMaker = teaMaker;
    this.orders = [];
  }

  takeOrder(teaType, table) {
    this.orders[table] = this.teaMaker.make(teaType);
  }

  serve() {
    this.orders.forEach((order, index) => {
      console.log("Serving tea to table#" + index);
    });
  }
}

const teaMaker = new TeaMaker();
const shop = new TeaShop(teaMaker);

shop.takeOrder("less sugar", 1);
shop.takeOrder("more milk", 2);
shop.takeOrder("without sugar", 5);

shop.serve();
// Serving tea to table# 1
// Serving tea to table# 2
// Serving tea to table# 5
