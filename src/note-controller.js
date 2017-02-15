(function(exports) {
  var NoteController = function(notelistmodel) {
}

  NoteController.prototype.getsHTML = function(notelistview) {
    this.element = document.getElementById('app')
    this.element.innerHTML = notelistview.returnHtml()
  }

  exports.NoteController = NoteController;
  exports.NoteController.getsHTML = NoteController.getsHTML;

})(this);
