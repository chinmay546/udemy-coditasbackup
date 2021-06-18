// reading existing notes from local storage
const getSaveNotes = function () {
  const notesJSON = localStorage.getItem("notes");

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

const saveNotes = function (notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};
//generate dom struct

const removeNote = function (id) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id === id;
  });
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

const generateNoteDom = function (not) {
  const noteEl = document.createElement("div");
  const textele = document.createElement("a");
  const btn = document.createElement("button");
  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  btn.textContent = "remove";
  textele.href = `./note_edit.html#${not.id}`;
  noteEl.appendChild(btn);
  if (not.completed) {
    check.checked = true;
  } else {
    check.checked = false;
  }
  btn.addEventListener("click", function () {
    removeNote(not.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });
  check.addEventListener("change", function () {
    markCompleted(not.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });
  if (not.title.lenght > 0) {
    textele.textContent = not.title;
  } else {
    textele.textContent = "un-named title";
  }
  noteEl.appendChild(textele);
  noteEl.appendChild(check);

  return noteEl;
};

const renderNotes = function (notes, filters) {
  const filtersNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  document.querySelector("#notes").innerHTML = "";
  filtersNotes.forEach(function (not) {
    const noteEl = generateNoteDom(not);
    document.querySelector("#notes").appendChild(noteEl);
  });
};

const markCompleted = function (id) {
  const noteIndex = notes.findIndex(function (notes) {
    return notes.id === id;
  });
  if (notes[noteIndex].completed) {
    notes[noteIndex].completed = false;
  }
};
