(function(exports){

  var NoteListView = function(noteList) {
    this.NoteList = noteList
  }

  NoteListView.prototype.returnHtml = function() {
    str = '<ul>'
    for each (var note in noteList.list){
    str+= '<li><div>' + note + '</div></li>'
    }
    return str + '</ul'>
  }

})(this);
