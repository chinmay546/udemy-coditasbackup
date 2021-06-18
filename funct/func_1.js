let greet_user = function () {
    console.log("in funtion")
}

greet_user()

let squ = function( number ){
    return number*number
}


let res = squ(5)
console.log(res)


let convert = function (fah) {
    let cel = (fah - 32 ) * (5/9)

let kel = ( fah + 459.67 ) * (5/9)
console.log("Cel :" + cel)
console.log("Kel :" + kel)
}
convert(32)
convert(68)