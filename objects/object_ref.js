let myAcc = {
    name : "Chinmay" ,
    expenses : 0 ,
    income : 0
}

let otherAcc = myAcc
otherAcc = {}
let addExpense = function(account , amount){

    account.expenses = account.expenses + amount
    console.log(account)
}

addExpense(myAcc , 10)
console.log(myAcc)
console.log(otherAcc)

addIncome (account , amount)