function testReturnsNote() {
  var notelisty = new NoteList
  notelisty.add('Hey Javascript.');

  if(notelisty.list()[0].read() !== 'Hey Javascript.') {
    throw new Error("NoteList Model .list Fails.")
  } else {
    console.log("NoteList.Model Works")
  }
};

testReturnsNote();
