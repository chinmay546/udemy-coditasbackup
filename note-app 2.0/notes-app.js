"use strict";

let notes = getSavedNotes();

const filters = {
  searchText: "",
  sortby: "byEdited",
};

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", (e) => {
  const id = uuidv4();
  const timeStamp = moment().valueOf();
  notes.push({
    create: timeStamp,
    updatedAt: timeStamp,
    id: id,
    title: "",
    body: "",
  });
  saveNotes(notes);
  location.assign(`/edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  filters.sortby = e.target.value;
  renderNotes(notes, filters);
});

window.addEventListener("storage", (event) => {
  if (event.key === "notes") {
    notes = JSON.parse(event.newValue);
    renderNotes(notes, filters);
  }
});
