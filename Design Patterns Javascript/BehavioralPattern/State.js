// It lets you change the behavior of a class when the state changes

// Transformation Functions
const upperCase = (inputString) => inputString.toUpperCase();
const lowerCase = (inputString) => inputString.toLowerCase();
const defaultTransform = (inputString) => inputString;

// Editor
class TextEditor {
  constructor(transform) {
    this._transform = transform;
  }

  setTransform(transform) {
    this._transform = transform;
  }

  type(words) {
    console.log(this._transform(words));
  }
}
// usage
const editor = new TextEditor(defaultTransform);
editor.type("First Line");

editor.setTransform(upperCase);

editor.type("Second Line");
editor.type("Third Line");

editor.setTransform(lowerCase);

editor.type("Fourth Line");
editor.type("Fifth Line");

/*
First Line
SECOND LINE
THIRD LINE
fourth line
fifth line
 */
