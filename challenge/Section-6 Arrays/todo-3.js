// sort the todo array on based on completed prop
// all completed at bottom and yet  to be completed at top 
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
const sortTodo = function(todo) {
    todo.sort(function (a , b) {
     if (a.completed) {
         return 1
     }
     else if (b.completed) {
         return -1
     }
     else {
         return 0
     }
    })
}

console.log(todo)
sortTodo(todo)
console.log(todo)