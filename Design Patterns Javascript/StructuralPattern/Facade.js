// Facade pattern provides simple interface to complex subsystem.

class Computer {
  getElectricShock() {
    console.log("Ouch!");
  }
  makeSound() {
    console.log("Beep!!!");
  }
  showLoadingScreen() {
    console.log("Loading...");
  }
  started() {
    console.log("Ready to be used!");
  }
  closeEverything() {
    console.log("Closing.....");
  }
  sooth() {
    console.log("zzzzz");
  }
  pullPlug() {
    console.log("Hahhhh!");
  }
}

class ComputerFacade {
  constructor(computer) {
    this.computer = computer;
  }

  turnOn() {
    this.computer.getElectricShock();
    this.computer.makeSound();
    this.computer.showLoadingScreen();
    this.computer.started();
  }

  turnOff() {
    this.computer.closeEverything();
    this.computer.pullPlug();
    this.computer.sooth();
  }
}

const computer = new ComputerFacade(new Computer());
computer.turnOn();

computer.turnOff();
