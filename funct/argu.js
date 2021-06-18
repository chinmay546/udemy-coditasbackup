let add = function(num1 , num2 ){
    return num1 + num2
}
let result = add(10 ,20)
console.log(result)
// defualt arugumens
let get_sco = function(name = "anno" , score = 0 ){
    console.log(name)
    console.log(score)
}
get_sco( undefined , 90)
// challenge
let tip = function(total , tip_per = 0.2) {

 console.log(`Your Tip for ${total} for percentage ${tip_per * 100} is ${total * tip_per }`)
}
tip(535 , 0.5)
console.log("Chinmay")

let name = 'chin'
console.log(`${name}`)


let firstName = 'John',
    lastName = 'Doe';

let greeting = `Hi ${firstName}, ${lastName}`; //acute keys is used 
console.log(`Hi ${firstName}, ${lastName} `); // Hi John, Doe