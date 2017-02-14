(function(exports){

  var NoteListView = function(noteList) {
    this.NoteList = noteList
  }

  NoteListView.prototype.returnHtml = function() {
    var listItems = ''
      this.NoteList.reallist.forEach(function(i) {
      listItems += '<li><div>' + i.read() + '</div></li>'
    })
  return '<ul>' + listItems + '</ul>';
};

exports.NoteListView = NoteListView;
exports.NoteListView.returnHtml = NoteListView.returnHtml;

})(this);
