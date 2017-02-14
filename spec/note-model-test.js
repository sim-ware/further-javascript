function testReturnsInstantiatedString() {
  var note = new Note('Why is Ben always lying?');

  if (note.read() !== 'Why is Ben always lying?') {
    throw new Error("Note Model Fails.");
  } else {
    console.log('Note Model Works.')
  }
};

testReturnsInstantiatedString();
