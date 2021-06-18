// let name = "Chinmay "
// console.log(name[3])
// console.log(name.toUpperCase())

let isValidPassord = function (password) {
    return (password.length > 8) && !password.includes("password")
}

console.log(isValidPassord("nswbrv"))
console.log(isValidPassord("nswibpasswjubsfordrv"))
console.log(isValidPassord("nswvnisnfdubfpassword"))