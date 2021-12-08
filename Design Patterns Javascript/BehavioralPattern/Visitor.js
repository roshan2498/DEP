// Visitor patttern let's you add futher operations to objects without having to modify them.
// dubai => (visa) => cities => Abu Dabhi

// zoo simulation
class Monkey {
  shout() {
    console.log("Ooh oo aa aa!");
  }

  accept(operation) {
    operation.visitMonkey(this);
  }
}

class Lion {
  roar() {
    console.log("Roaaar!");
  }

  accept(operation) {
    operation.visitLion(this);
  }
}

class Dolphin {
  speak() {
    console.log("Tuut tuttu tuut!!");
  }

  accept(operation) {
    operation.visitDolphin(this);
  }
}

// visitor
const speak = {
  visitMonkey(monkey) {
    monkey.shout();
  },
  visitLion(lion) {
    lion.roar();
  },
  visitDolphin(dolphin) {
    dolphin.speak();
  },
};

const monkey = new Monkey();
const lion = new Lion();
const dolphin = new Dolphin();

monkey.accept(speak);
lion.accept(speak);
dolphin.accept(speak);

//we are asked to add the jump behavior to the animals, we can simply add that by creating a nwe visitor.

const jump = {
  visitMonkey(monkey) {
    console.log("Jumped 20 feet high! on the the tree!");
  },
  visitLion(lion) {
    console.log("Jumped 7 feet! Back on the ground!");
  },
  visitDolphin(dolphin) {
    console.log("Walked on water a little and disappeared!");
  },
};

monkey.accept(jump);
lion.accept(jump);
dolphin.accept(jump);

/*
Output:

Ooh oo aa aa!
Roaaar!
Tuut tuttu tuut!!

Jumped 20 feet high! on the the tree!
Jumped 7 feet! Back on the ground!
Walked on water a little and disappeared!
*/
