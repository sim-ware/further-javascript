// var note = require("src/note-model.js")

function testReturnsInstantiatedString() {
  var note = new Note('Hey Javascript');

  if (note.read() !== 'Hey Javascript') {
    throw new Error("You messed up.");
  } else {
    console.log('No problem.')
  }
};

testReturnsInstantiatedString();
