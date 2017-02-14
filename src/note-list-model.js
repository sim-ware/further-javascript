(function(exports){

  var NoteList = function() {
    this._list = []
  }

  NoteList.prototype.add = function(text) {
    var note = new Note(text)
    this._list.push(note)
  }

  NoteList.prototype.list = function() {
    return this._list;
  }

  exports.NoteList = NoteList;
  exports.NoteList.list = NoteList.list;
  exports.NoteList.add = NoteList.add;

})(this);
