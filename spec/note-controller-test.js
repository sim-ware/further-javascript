function testInstantiatesNoteController() {
  var notelist = new NoteList();
  var noteController = new NoteController(notelist);
  if (noteController instanceof NoteController){
    console.log('Test InstantiateNoteController Passed')
  } else {
    throw new Error("Test InstantiateNoteController Fails")
  }
};

testInstantiatesNoteController();


function testGetsHTML() {
  var list = new NoteList();
  var notelistview = new NoteListView(list)
  list.add('Favourite Food: Pesto');
  var notecontroller = new NoteController(list);
  document.getElementById = function() {
    return {};
  };
    notecontroller.getsHTML(notelistview);
    console.log(notecontroller.element.innerHTML)
    if (notecontroller.element.innerHTML === '<ul><li><div>Favourite Food: Pesto</div></li></ul>'){
      console.log('Test GetsHTML passes')
    } else {
      throw new Error("Test GetsHTML fails")
    }
};

testGetsHTML();




// function testReturnsNote() {
//   var notelisty = new NoteList
//   notelisty.add('Hey Javascript.');
//
//   if(notelisty.list()[0].read() !== 'Hey Javascript.') {
//     throw new Error("NoteList Model .list Fails.")
//   } else {
//     console.log("NoteList.Model Works")
//   }
// };
//
// testReturnsNote();
//
//
// if (circle.radius() !== 10) {
//    throw new Error("Circle size is not 10");
//  }
// };
