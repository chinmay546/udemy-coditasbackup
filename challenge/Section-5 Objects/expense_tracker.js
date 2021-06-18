//addExpense : adding expenses
//addIncome : adding a income
//resetAcc: seting values to zero
//getAccsUMM : dusplay all info
let myAcc = {
    name : "Chinmay" ,
    expenses : 0 ,
    income : 0
}

let addExpense = function(account , amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function(account , amount) {
    account.income = account.income + amount
}

let resetAcc = function(account) {
    account.expenses = 0
    account.income = 0
}

let getAccSum = function(account) {
    console.log(`Account for ${account.name} has $${account.income - account.expenses} . $${account.income} in income. $${account.expenses} in expenses`)
}

addIncome(myAcc , 2000)
addExpense(myAcc, 2.50)
addExpense(myAcc,160)
getAccSum(myAcc)
resetAcc(myAcc)
getAccSum(myAcc)