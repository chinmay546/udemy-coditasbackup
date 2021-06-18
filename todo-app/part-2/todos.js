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
let count = 0
todo.forEach(function(ele) {

    if (!ele.completed) {
        count = count + 1
    }    
})

let remainTodo = document.createElement("h4")
remainTodo.textContent = `You have ${count} left . `
document.querySelector('body').appendChild(remainTodo)
todo.forEach( function(element) {
  
        let letfTodo = document.createElement('h3')
        letfTodo.textContent = element.text
        document.querySelector('body').appendChild(letfTodo)
    
})