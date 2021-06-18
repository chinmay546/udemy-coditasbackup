const todo = [
    { text: 'Clean the office table',
     completed: true 
    },
    { text: 'Buy new pair of shocks', 
    completed: false 
},
    { text: 'Dental check up', 
    completed: true
 },
    { text: 'Course Complition',
     completed: false 
    },
    { text: 'Revision of Opps Concepts',
     completed: true
}
  ]


let completedTodo = 0
let unCompletedTodo  = 0 
const searchedTodo = {
    searchText : ''
}
const renderNotes = function(notes , filters){
    const filtersTodo = notes.filter(function(note){
        return note.text.toLowerCase().includes(searchedTodo.searchText.toLowerCase())
    })
    document.querySelector('#todos').innerHTML = ""
    document.querySelector('#count').innerHTML = ""
   filtersTodo.forEach(function(not) {
       const noteEl = document.createElement("h2")
       noteEl.textContent = not.text
       document.querySelector('#todos').appendChild(noteEl)
       if (not.completed) {
        noteEl.style.color = "green"
        completedTodo += 1 
    
       } 
       else {
           noteEl.style.color = 'red'
           unCompletedTodo += 1
       }
    


   })
   let count = filtersTodo.length
   let remainTodo = document.createElement("h2")
   remainTodo.textContent = `You have ${count} left  , among which ${completedTodo} are completed and ${unCompletedTodo} are remaining ` 
   document.querySelector('#count').appendChild(remainTodo)
   completedTodo = 0
   unCompletedTodo = 0
   
}

//  listing the todo search 
document.querySelector('#searchTodo').addEventListener('input' , function(event) {

  searchedTodo.searchText = event.target.value
    renderNotes(todo , searchedTodo)

} )

document.querySelector('#addTodo').addEventListener('click', function(e){
    console.log("Adding A Note")
  
})

