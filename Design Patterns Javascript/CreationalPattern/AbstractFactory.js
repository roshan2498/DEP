/*
Door interface :

getDescription()
*/

class WoodenDoor {
  getDescription() {
    console.log("Wooden Door");
  }
}

class IronDoor {
  getDescription() {
    console.log("Iron Door");
  }
}

/*
DoorFittingExpert interface :

getDescription()
*/

class Welder {
  getDescription() {
    console.log("Fit Iron Door");
  }
}

class Carpenter {
  getDescription() {
    console.log("Fit Wooden Door");
  }
}

/*
DoorFactory interface :

makeDoor()
makeFittingExpert()
*/

class WoodenDoorFactory {
  makeDoor() {
    return new WoodenDoor();
  }

  makeFittingExpert() {
    return new Carpenter();
  }
}

class IronDoorFactory {
  makeDoor() {
    return new IronDoor();
  }

  makeFittingExpert() {
    return new Welder();
  }
}
woodenFactory = new WoodenDoorFactory();

door = woodenFactory.makeDoor();
expert = woodenFactory.makeFittingExpert();

door.getDescription(); // Output: I am a wooden door
expert.getDescription(); // Output: I can only fit wooden doors

// Same for Iron Factory
ironFactory = new IronDoorFactory();

door = ironFactory.makeDoor();
expert = ironFactory.makeFittingExpert();

door.getDescription(); // Output: I am an iron door
expert.getDescription(); // Output: I can only fit iron doors
