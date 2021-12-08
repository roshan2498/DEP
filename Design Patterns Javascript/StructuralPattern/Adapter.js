// Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.
// old interface
class OldCalculator {
  constructor() {
    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case "add":
          return term1 + term2;
        case "sub":
          return term1 - term2;
        default:
          return NaN;
      }
    };
  }
}
// new interface
class NewCalculator {
  constructor() {
    this.add = function (term1, term2) {
      return term1 + term2;
    };
    this.sub = function (term1, term2) {
      return term1 - term2;
    };
  }
}

// adapter class
class CalcAdapter {
  constructor() {
    const newCalc = new NewCalculator();
    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case "add":
          return newCalc.add(term1, term2);

        case "sub":
          return newCalc.sub(term1, term2);
        default:
          return NaN;
      }
    };
  }
}

// usage
// old
const oldCalc = new OldCalculator();
console.log(oldCalc.operations(10, 5, "add")); //15

const newCalc = new NewCalculator();
console.log(newCalc.add(10, 5)); //15

const adapterCalc = new CalcAdapter();
console.log(adapterCalc.operations(10, 5, "add")); //15
