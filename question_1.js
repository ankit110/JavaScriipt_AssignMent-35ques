// 1. Create an object literal called personAccount. 
// It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

let personAccount = {
    firstName: "Ankit",
    lastName: "Kumar",
    
    incomes : {
        freelancing: 200000,
        jobIncome: 700000,
        business: 450000,
        investment: 200000
    },

    expenses : {
        shoppingExpenses: 100000,
        homeRent: 50000,
        householdExpenses: 40000
    },

    totalIncome : function() {
        totalIncomes = this.incomes.freelancing + this.incomes.jobIncome + this.incomes.business + this.incomes.investment;
        return totalIncomes;
    },

    totalExpense : function()  {
        totalExpenses = this.expenses.shoppingExpenses + this.expenses.homeRent + this.expenses.householdExpenses;
        return totalExpenses;
    },

    accountInfo : function() {
        let totalIn = this.addIncome();
        let totalEx = this.addExpense();
        let statement = `
Full Name:      ${this.firstName} ${this.lastName}
Total Income:   Rs ${totalIn}
Total Expense:  Rs ${totalEx}
        `;

        return statement;
    },

    addIncome : function() {
        let moreIncome = 230000;
        moreIncome = this.totalIncome() + moreIncome;
        return moreIncome;
    },

    addExpense : function() {
        let moreExpense = 120000;
        moreExpense = this.totalExpense() + moreExpense;
        return moreExpense;
    },

    accountBalance : function() {
        let accBal = this.addIncome() - this.addExpense();
        return `Total account balance after all expenses =>Rs ${accBal}`;
    }

};

console.log(personAccount.accountInfo());

console.log(personAccount.accountBalance());



