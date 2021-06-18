// let num = 101.9323

// console.log(num.toFixed(1))

// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))

// let min = 0
// let max = 1
// let randonNumber = Math.floor(Math.random() * (max - min + 1))

// console.log(randonNumber)

//chanlge 
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