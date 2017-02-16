
(function(exports) {
  var id = 0
  var Note = function(string) {
    this.text = string;
  }

  function generateId() { return id++ };

  Note.prototype.id = function() {
    var newId = generateId();

    this.id = function() { return newId };
    return newId;
  };

  Note.prototype.read = function() {
  return this.text;
  }

  exports.Note = Note;
  exports.Note.read = Note.read;

})(this);
