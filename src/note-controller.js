(function(exports) {

  var NoteController = function(notelistmodel) {
    console.log('hello3')

    console.log('hello4')

}

  NoteController.prototype.getsHTML = function(notelistview) {
    console.log('hello5')
    this.element = document.getElementById('app')
    console.log('hello6')
    this.element.innerHTML = notelistview.returnHtml()
  }

  exports.NoteController = NoteController;
  console.log('hello7')
  exports.NoteController.getsHTML = NoteController.getsHTML;

})(this);
