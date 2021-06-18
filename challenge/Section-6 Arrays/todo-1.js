const todo = [
    "todo_1" ,
    "todo_2" ,
    "todo_3" ,
    "todo_4" ,
    "todo_5" 
]
// 1 . convert array to array of object : 
// adding property text , completed
//you can decide the value of completed property
// 2 . create a function to remove tht item in array 
let complete = true
for (i = 0 ; i < todo.length ; i ++ ) {
    if (i % 2 == 0){
        complete = true
    }
    else {
        complete = false
    }
    todo[i] = {
        text : todo[i] , 
        completed : complete
    }
}

let deleteTodo = function(todo , item_title) {
    const index = todo.findIndex(function(todo , index){
               return todo.text.toLowerCase() === item_title.toLowerCase() // case in sensitive search
         })
         if (index != -1) {
             todo.splice(index,1 )
         }
}
//deleteTodo (todo , ) // sec argu the item to remove

console.log(todo)
deleteTodo(todo,"todo_4")
console.log(todo)