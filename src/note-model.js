(function(exports) {

  var Note = function(string) {
    this.text = string;
  }

  Note.prototype.read = function() {
  return this.text;
  }

  exports.Note = Note;
  exports.Note.read = Note.read;

})(this);
