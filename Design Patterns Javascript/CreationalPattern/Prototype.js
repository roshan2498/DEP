class Shopper {
  constructor(name = "xyz") {
    this._name = name;
    this._shoppingList = [];
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get shoppingList() {
    return this._shoppingList.join(", ");
  }

  addItemToList(item) {
    this._shoppingList.push(item);
  }

  clone() {
    let proto = Object.getPrototypeOf(this);
    let clone = Object.create(proto);
    clone._name = this._name;
    clone._shoppingList = [...this._shoppingList];

    return clone;
  }
}

// first object
const scout = new Shopper();
scout.addItemToList("tent");
scout.addItemToList("map");

const A = scout.clone();
alex.name = "B";
alex.addItemToList("toilet paper");

const B = A.clone();
roshan.name = "A";
roshan.addItemToList("toothrush");

console.log(scout);
console.log(A);
console.log(B);
