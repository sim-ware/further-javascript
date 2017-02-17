function testNoteListView() {
  var notelisty = new NoteList()
  notelisty.add('Favourite Food: Gaucho Sandwich')

  var notelistview = new NoteListView(notelisty)

  if(notelistview.returnHtml() !== '<ul><a href=#notes/2><li><div>Favourite Food: Gauc</div></li></a></ul>'){
    throw new Error("NoteListView Fails.")
  } else {
    console.log('NoteListView Works')
  }

};

testNoteListView();
