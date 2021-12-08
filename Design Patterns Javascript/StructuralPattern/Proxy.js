/*
Door interface :

open()
close()
*/

class LabDoor {
  open() {
    console.log("Opening lab door");
  }

  close() {
    console.log("Closing the lab door");
  }
}

class Security {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log("Big no! It ain't possible.");
    }
  }

  authenticate(password) {
    return password === "ecr@t";
  }

  close() {
    this.door.close();
  }
}

// usage
const door = new Security(new LabDoor());
door.open("invalid"); // Big no! It ain't possible.

door.open("ecr@t"); // Opening lab door
door.close(); // Closing lab door
