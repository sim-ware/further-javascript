function testReturnsInstantiatedString() {
  var note = new Note('Why is Ben always lying?');

  if (note.read() !== 'Why is Ben always lying?') {
    throw new Error("Note Model Fails.");
  } else {
    console.log('Note Model Works.')
  }

};

testReturnsInstantiatedString();

function testNoteHasUniqueId() {
  var note = new Note('zero')
  var note1 = new Note('one')

  if (note.id() === 0 && note1.id() === 1) {
    console.log('unique ids for every note')
  } else {
    console.log('ids invalid')
  }
}

testNoteHasUniqueId();
