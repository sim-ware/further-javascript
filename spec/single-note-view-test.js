function singleNoteViewTestInstantiation() {
  var note = new Note('Here is a note, take note')
  var singleNoteView = new SingleNoteView(note)

  if (singleNoteView instanceof SingleNoteView) {
    console.log("Tis an instance!")
  } else {
    throw new Error("It's NOT an instance")
  };

}

singleNoteViewTestInstantiation();


function singleNoteViewReturnHTMLString() {
  var note = new Note('Fav Drink: Mojito')
  var singleNoteView = new SingleNoteView(note)

  if (singleNoteView.returnHTMLString() !== "<div>Fav Drink: Mojito</div>") {
    throw new Error("returnHTMLString failed!")
  } else {
    console.log("returning html string worked!")
  };

}

singleNoteViewReturnHTMLString();
