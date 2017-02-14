(function(exports) {

  var Note = function(string) {
    this._text = string;
  }

  Note.prototype.read = function() {
  return this._text;
};

  exports.Note = Note;
  exports.Note.read = Note.read;

})(this);
