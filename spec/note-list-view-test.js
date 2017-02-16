function testNoteListView() {
  var notelisty = new NoteList()
  notelisty.add('Favourite Food: Gaucho Sandwich')
  notelisty.add('Favourite Drink: Fizzed Pop')

  var notelistview = new NoteListView(notelisty)

  if(notelistview.returnHtml() !== '<ul><li><div>Favourite Food: Gauc</div></li><li><div>Favourite Drink: Fiz</div></li></ul>'){
    throw new Error("NoteListView Fails.")
  } else {
    console.log('NoteListView Works')
  }

};

testNoteListView();
