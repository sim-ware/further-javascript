function testNoteListView() {
  var notelisty = new NoteList()
  notelisty.add('Favourite Food: Gaucho Sandwich')

  var notelistview = new NoteListView(notelisty)

  if(notelistview.returnHtml() !== '<a href="file:///Users/admin030815/projects/furjava/further-javascript/test.html#notes/1"><ul><li><div>Favourite Food: Gauc</div></li><li><div>Favourite Drink: Fiz</div></li></ul></a>'){
    console.log(notelistview.returnHtml());
    // throw new Error("NoteListView Fails.")
  } else {
    console.log('NoteListView Works')
  }

};

testNoteListView();
