//challenge area 
// 1 - 5  : if guused number is correct return true or false
let min = 1 
let max = 5 

let guess = function(number) {
    let randonNumber = Math.floor(Math.random() * (max - min + 1))
    console.log(number === randonNumber)
}

guess(1)
guess(2)
guess(3)
guess(4)