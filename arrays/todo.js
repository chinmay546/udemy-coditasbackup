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

// const deleteTodo = function(todo , todoTitle) {
//     const index = todo.findIndex(function(todo){
//                return todo.text.toLowerCase() === todoTitle.toLowerCase() // case in sensitive search
//          })
//          if (index != -1) {
//              todo.splice(index,1 )
//          }
// }
// //deleteTodo (todo , ) // sec argu the item to remove

// create a function which will return the todos which are yet to be completed 

// const getThingsTodo = function(array) {
//     return array.filter( function(array) {
//         return !array.completed   
//      } )
// }

// console.log(getThingsTodo(todo))

// sort the todo array on based on complited prop
// all complited at bottom and yet  to be completed at top 

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
