(function(exports){

  var NoteListView = function(noteList) {
    this.NoteList = noteList
  }

  NoteListView.prototype.returnHTML = function() {
  var listItems = ''
  this.noteList.notes.forEach(function(i) {
    listItems += '<li><div>' + i.content() + '</div></li>'
  })
  return '<ul>' + listItems + '</ul>';
};

})(this);
