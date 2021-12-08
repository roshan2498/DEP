// Factory Pattern is another class-based creational pattern. In this, we provide a generic interface that delegate the responsibility of object instantiation to its subclasses.

// This pattern is frequently used when we need to manage or manipulate collections of objects that are different yet have many similiar characteristics.

class BallFactory {
  static createBall(type) {
    let ball;
    if (type === "football" || type === "soccer") ball = new Football();
    else if (type === "basketball") ball = new BasketBall();

    ball.roll = function () {
      return `The ${this._type} is rolling.`;
    };

    return ball;
  }
}

class Football {
  constructor() {
    this._type = "football";
    this.kick = function () {
      return "You kicked the football.";
    };
  }
}

class BasketBall {
  constructor() {
    this.type = "basketball";
    this.bounce = function () {
      return "You bounced the basketball.";
    };
  }
}

// creating objects
const myFootball = BallFactory.createBall("football");
const myBasketball = BallFactory.createBall("basketball");

console.log(myFootball, myBasketball);
console.log(myFootball.roll());
console.log(myFootball.kick());

console.log(myBasketball.bounce());
console.log(myBasketball.roll());
