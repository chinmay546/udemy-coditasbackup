const todo = [
    { text: 'todo_1',
     completed: true 
    },
    { text: 'todo_2', 
    completed: false 
},
    { text: 'todo_3', 
    completed: true
 },
    { text: 'todo_4',
     completed: false 
    },
    { text: 'todo_5',
     completed: true
}
  ]

let todos = document.querySelectorAll('p')

todos.forEach(function(element) {
    if (element.textContent.includes('the')) {
    element.remove()
    }
   
})