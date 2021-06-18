const notes = [
   
    {
        title : "note_3_efg" ,
        body : "note_3_body_oip"
    },
    {
        title : "note_2_bdf" ,
        body : "note_2_body_gfg"
    },
    {
        title : "note_1_abc" ,
        body : "note_1_body_ds"
    }
]

// console.log(notes[3])
// notes.push("asuf")
// console.log(notes)
// notes.pop()
// console.log(notes)

// console.log(notes.shift())
// console.log(notes)

// notes.unshift("pahile")
// console.log(notes)

// notes.splice(1,1, 'ek', 'doon')



// console.log(notes)
// const findNote = function(notes , noteTitle) {
//     return notes.find(function(note , index){
//        return note.title.toLowerCase() === noteTitle.toLowerCase() // case in sensitive search
//     }) //  this will return a object 
   
// } // there is a function to do all this work  : .find()


// const filterNotes =function(notes , query){ 
//     return notes.filter(function(notes , index) {
//     const isTitleMatch = notes.title.toLowerCase().includes(query.toLowerCase()) // will return true if found
//     const isBodyMatch = notes.body.toLowerCase().includes(query.toLowerCase()) // - || - same as above
//     return isTitleMatch ||  isBodyMatch
// })
// }

// console.log(filterNotes(notes , "oip"))
// // const findNote = function(notes , noteTitle) {
// //     const index = notes.findIndex(function(note , index){
// //        return note.title.toLowerCase() === noteTitle.toLowerCase() // case in sensitive search
// //     }) // this will return index 
// //     return notes[index]
// // }
// // const note = findNote(notes , "ote_3")
// // console.log(note)

const sortNotes = function(notes) {
    notes.sort(function (a , b) {
     if (a.title.toLowerCase() < b.title.toLowerCase() ){
         return -1
     }
     else if (a.title.toLowerCase() > b.title.toLowerCase()){
         return 1
     }
     else {
         return 0
     }
    })
}

console.log(notes)
sortNotes(notes)
console.log(notes)