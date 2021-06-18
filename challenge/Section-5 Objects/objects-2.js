// challenge 
// return the object with all three unit

let convert = function (fah) {
    let cel = (fah - 32 ) * (5/9)

let kel = ( fah + 459.67 ) * (5/9)
return {
    fah : fah ,
    cel : cel ,
    kel : kel
} 
}

let convert1 = convert(100)
console.log(convert1)