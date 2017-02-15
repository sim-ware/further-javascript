var notelistmodel = new NoteList
console.log('hello1')
var notelistview = new NoteListView(notelistmodel)
var notecontroller = new NoteController(notelistmodel)
console.log('hello2')
notecontroller.getsHTML(notelistview)
