(function Note() {

Note.prototype.read = function(string) {
  this._text = string
  return this._text;
  };

})(this);
