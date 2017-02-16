(function(exports){

  var SingleNoteView = function(note) {
    this.note = note
  }

  SingleNoteView.prototype.returnHTMLString = function() {
    return '<div>' + this.note.read() + '</div>'
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
