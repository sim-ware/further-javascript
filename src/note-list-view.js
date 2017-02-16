(function(exports){

  var NoteListView = function(noteList) {
    this.NoteList = noteList
  }

  NoteListView.prototype.returnHtml = function() {
    var listItems = '<ul>'
      this.NoteList.reallist.forEach(function(i) {
      listItems += '<li><div>' + i.read().substring(0,20) + '</div></li>'
    })
  return listItems + '</ul>';
};

exports.NoteListView = NoteListView;
exports.NoteListView.returnHtml = NoteListView.returnHtml;

})(this);
