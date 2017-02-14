(function(exports){

  var NoteList = function() {
    this.list = []
  }

  NoteList.prototype.add = function(text) {
    var note = new Note(text)
    this.list.push(note)
  }

  NoteList.prototype.list = function() {
    return this.list;
  }

  exports.NoteList = NoteList;
  exports.NoteList.list = NoteList.list;
  exports.NoteList.add = NoteList.add;

})(this);
