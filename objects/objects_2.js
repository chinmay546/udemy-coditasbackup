// let book1 = {
//     title : "Book_1_title" , author : "cvv" , pageCount : 890
// }

// let book2 = {
//     title : "Book_2_title" , author : "ryyr" , pageCount : 876
// }

// let getSummary = function(book){

//     return {
//       summary : `${book.title}  by ${book.author}`,
//       pageCountSum : `${book.title} with ${book.pageCount} pages `
//     }
// }

// let sum1 = getSummary(book1)
// console.log(sum1)
// let sum2 = getSummary(book2)
// console.log(sum2)

// challenge 

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
