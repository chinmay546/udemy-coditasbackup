
const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
},
{
    title : 'office clean up' ,
    body : 'clean up the mess'
}
]
// // for one match 
// // let p = document.querySelector('p')
// // console.log(p) 

// // for getting all match 
// const ps = document.querySelectorAll('p')
// // list of all p tag will be saved in ps 

// ps.forEach( function (item) { 
//     // item will save the data , for printing actual data use item.textContent
//     console.log(item.textContent)
//     item.textContent = '****' // this will change the contnet and display on html
// // // this will remove all p tag 
// })

// const neWPara = document.createElement("p")
// neWPara.textContent = 'new content'
// document.querySelector('body').appendChild(neWPara)


//ading a function when buttn is clicked

// document.querySelector('button').addEventListener('click', function(e){
//     console.log("button is clicked ")
//     e.target.textContent = "Button click"
// })

const filters = {
    searchText : ''
}
const renderNotes = function(notes , filters){
    const filtersNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = ""
   filtersNotes.forEach(function(not) {
       const noteEl = document.createElement("p")
       noteEl.textContent = not.title
       document.querySelector('#notes').appendChild(noteEl) 
   });

}
renderNotes(notes,filters)
// target by id use #and id name
document.querySelector('#createNote').addEventListener('click', function(e){
    console.log("Create Note ")
   
})

document.querySelector('#search').addEventListener('input' , function(e){

    filters.searchText = e.target.value
    renderNotes(notes , filters)
    //'input' ch meaning ki every input la function fire karteee 
    // 'change' ch meaning ki 
    // type karun click kela kivva enter kele ki he function fire honr 
})
// submit event is fired when user click submit btn 
// document.querySelector('#nameForm').addEventListener('submit' , function(event){
//     event.preventDefault() // does not show submited data in url
//    console.log(event.target.elements.firstName.value)   // accessing the data from form
//    event.target.elements.firstName.value = "" // viping out the data after submit 
// } )

// document.querySelector('#checkBox').addEventListener('change' , function(e){
//     console.log(e.target.checked) // check box returns true for checking it 
// })


document.querySelector("#filterBy").addEventListener('change' , function(event) {
    console.log(event.target.value)
})