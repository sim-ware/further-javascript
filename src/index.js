var notelistmodel = new NoteList
notelistmodel.add("favourite drink: mojito")
var notelistview = new NoteListView(notelistmodel)
var notecontroller = new NoteController(notelistmodel)
notecontroller.getsHTML(notelistview)
