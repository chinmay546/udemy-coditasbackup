"use strict";

const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeElement = document.querySelector("#remove-note");
const lastUpdated = document.querySelector("#lastUpdate");
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function (note) {
  return note.id === noteId;
});

if (!note) {
  location.assign("/index.html");
}

titleElement.value = note.title;
bodyElement.value = note.body;
lastUpdated.textContent = generateMsg(note.updatedAt);

titleElement.addEventListener("input", function (e) {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf();
  lastUpdated.textContent = generateMsg(note.updatedAt);
  saveNotes(notes);
});

bodyElement.addEventListener("input", function (e) {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf();
  lastUpdated.textContent = generateMsg(note.updatedAt);
  saveNotes(notes);
});

removeElement.addEventListener("click", function (e) {
  removeNote(note.id);
  saveNotes(notes);
  location.assign("/index.html");
});
//storage is fire when thier is change is localstorage
window.addEventListener("storage", function (event) {
  if (event.key === "notes") {
    notes = JSON.parse(event.newValue);
    let note = notes.find(function (note) {
      return note.id === noteId;
    });

    if (!note) {
      location.assign("/index.html");
    }

    titleElement.value = note.title;
    bodyElement.value = note.body;
    lastUpdated.textContent = generateMsg(note.updatedAt);
  }
});
