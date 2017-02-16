(function(exports){

  var NoteListView = function(noteList) {
    this.NoteList = noteList
  }

  NoteListView.prototype.returnHtml = function() {
    var listItems = '<ul>'
      this.NoteList.reallist.forEach(function(i) {
      listItems += '<a href='
      listItems += window.location;
      listItems += '#notes/'
      listItems += i.id()
      listItems += '>'
      listItems += '<li><div>' + i.read().substring(0,20) + '</div></li>'
      listItems += '</a>'
    })
  return listItems + '</ul>';
};

  // NoteListView.prototype.generateURL = function(note) {
  //   var currentLocation = window.location;
  //   console.log(currentLocation + '#asdfasdf' + note.id());
  // }

exports.NoteListView = NoteListView;
exports.NoteListView.returnHtml = NoteListView.returnHtml;
exports.NoteListView.generateURL = NoteListView.generateURL;
})(this);
