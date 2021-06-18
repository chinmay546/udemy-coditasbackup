// password is valid if length is greater then 8 and 
// does not contain word "password"

let isValidPassord = function (password) {
    return (password.length > 8) && !password.includes("password")
}

console.log(isValidPassord("nswbrv"))
console.log(isValidPassord("nswibpasswjubsfordrv"))
console.log(isValidPassord("nswvnisnfdubfpassword"))