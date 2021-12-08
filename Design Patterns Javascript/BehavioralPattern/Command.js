// Allows you to encapsulate actions in objects. The key idea behind this pattern is to provide the means to decouple client from receiver.

// You turn on television.
// Client,Command(switching on),Invoker(remote),Receiver(television)

class Bulb {
  turnOn() {
    console.log("Bulb has been lit !");
  }

  turnOff() {
    console.log("Darkness!");
  }
}

class TurnOnCommand {
  constructor(bulb) {
    this.bulb = bulb;
  }

  execute() {
    this.bulb.turnOn();
  }

  undo() {
    this.bulb.turnOff();
  }

  redo() {
    this.execute();
  }
}

class TurnOffCommand {
  constructor(bulb) {
    this.bulb = bulb;
  }

  execute() {
    this.bulb.turnOff();
  }

  undo() {
    this.bulb.turnOn();
  }

  redo() {
    this.execute();
  }
}

class RemoteControl {
  submit(command) {
    command.execute();
  }
}

const bulb = new Bulb();
const turnOn = new TurnOnCommand(bulb);
const turnOff = new TurnOffCommand(bulb);

const remote = new RemoteControl();
remote.submit(turnOn);
remote.submit(turnOff);

/*
Output:
Bulb has been lit!
Darkness!
 */
