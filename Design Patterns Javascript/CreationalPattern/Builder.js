class Burger {
  constructor(builder) {
    this.size = builder.size;
    this.cheeze = builder.cheeze || false;
    this.pepperoni = builder.pepperoni || false;
    this.lettuce = builder.lettuce || false;
    this.tomato = builder.tomato || false;
  }
}

class BurgerBuilder {
  constructor(size) {
    this.size = size;
  }

  addPepperoni() {
    this.pepperoni = true;
    return this;
  }

  addLettuce() {
    this.lettuce = true;
    return this;
  }

  addCheeze() {
    this.cheeze = true;
    return this;
  }

  addTomato() {
    this.tomato = true;
    return this;
  }

  build() {
    return new Burger(this);
  }
}

const myBurger = new BurgerBuilder(14).addCheeze(true).build();

// console.log(myBurger);

// console.log(burger);
// js specific single object argument

// const burger = new Burger({
//   size: 14,
//   pepperoni: true,
// });

console.log(burger);
