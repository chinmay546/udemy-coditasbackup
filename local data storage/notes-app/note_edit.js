const noteTile = document.querySelector("#noteTitle");
const noteBody = document.querySelector("#noteBody");
const noteId = location.hash.substring(1);
const notes = getSaveNotes();
const note = notes.find(function (note) {
  return note.id === noteId;
});
if (note === undefined) {
  location.assign("./index.html");
}

noteTile.value = note.title;

noteBody.value = note.body;
noteTile.addEventListener("input", function (event) {
  note.title = event.target.value;
  saveNotes(note);
});
