// add a income array 
// addIncome method => desciption , amount 
// getAccountSummary :
// print => name has a balance of bal_amount and income in income , total_expenses in expenses

const account = {
    name : 'Chinmay',
    expenses : [] ,
    income : [] ,
    addExpenses : function (description , amount){
        this.expenses.push({
            description :description ,
            amount : amount
        })
    },
    addIncome : function (description , amount){
        this.income.push({
            description :description ,
            amount : amount
        })
    },
    getAccountSumary : function(e) {
        let totalIncome = 0
        let totalExpenses = 0
        let totalBalance = 0
        for ( i = 0 ; i < this.expenses.length ; i++){
            totalIncome = totalIncome + this.income[i].amount
            totalExpenses = totalExpenses + this.expenses[i].amount
        }
        totalBalance = totalIncome - totalExpenses
        console.log(`${this.name} has balance of $${totalBalance}. $${totalIncome} in income. $${totalExpenses} in expenses`)
    }
}

account.addExpenses("item_1" , 110)
account.addExpenses("item_2" , 12)
account.addExpenses("item_3" , 30)
account.addExpenses("item_4" , 32)
account.addExpenses("item_5" , 25)
account.addExpenses("item_6" , 76)
account.addIncome("item-1", 100)
account.addIncome("item-1", 100)
account.addIncome("item-2", 10)
account.addIncome("item-3", 23)
account.addIncome("item-4", 35)
account.addIncome("item-5", 65)
account.getAccountSumary()