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


// create a function which will return the todos which are yet to be completed 

const getThingsTodo = function(array) {
    return array.filter( function(array) {
        return array.completed === false
    } )
}

console.log(getThingsTodo(todo))