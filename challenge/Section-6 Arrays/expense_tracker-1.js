

// expense  : descirption : 
            //   amount :
// method in Object 
// addexpense  : (description , amount )
// getaccsum : total all expense and print 
// Chinmay has $total in expenses
let totalAmount = 0
const account = {
    name : 'Chinmay',
    expenses : [] ,
    addExpenses : function (description , amount){
        this.expenses.push({
            description :description ,
            amount : amount
        })
    },
    getAccountSumary : function(e) {
        for ( i = 0 ; i < this.expenses.length ; i++){
            totalAmount = totalAmount + this.expenses[i].amount
        }
        console.log(`${this.name} has $${totalAmount} in expenses`)
    }
}

account.addExpenses("item_1" , 10)
account.addExpenses("item_2" , 12)
account.addExpenses("item_3" , 30)
account.addExpenses("item_4" , 32)
account.addExpenses("item_5" , 25)
account.addExpenses("item_6" , 76)
account.getAccountSumary()