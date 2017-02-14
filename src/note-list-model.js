(function(exports){

  var NoteList = function() {
    this.reallist = []
  }

  NoteList.prototype.add = function(text) {
    var note = new Note(text)
    this.reallist.push(note)
  }

  NoteList.prototype.list = function() {
    return this.reallist;
  }

  exports.NoteList = NoteList;
  exports.NoteList.list = NoteList.list;
  exports.NoteList.add = NoteList.add;

})(this);
