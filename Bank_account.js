class BankAccount {
    constructor(owner) {
        this.owner = owner;
        this.balance = 0;
        this.transactions = [];
    }

    deposit(sum) {
        if (sum < 0) {
            console.log("Måste vara ett positivt tal!");
        } else {
            this.balance += sum;
        }
    }

    withdraw(sum) {
        if (sum < 0) {
            console.log("Måste vara ett positivt tal!");
        } else if (sum > this.balance) {
            console.log("För stort uttag!");
        } else {
            this.balance -= sum;
        }
    }

    toString() {
        return `Kontoägare: ${this.owner.name} - Saldo: ${this.balance}`;
    }

    transfer(transfer_to, sum) {
        let transaction = new Transaction(this, transfer_to, sum);

        transfer_to.deposit(sum);
        transfer_to.transactions.push(transaction);

        this.withdraw(sum);
        this.transactions.push(transaction);
    }

    statement() {
        console.log(`Kontoutdrag för: ${this.owner.name}`);
        for (let transaction of this.transactions) {
            console.log(`${transaction.date}: ${transaction.from.owner.name} -> ${transaction.to.owner.name} - ${transaction.sum}`);
        }
    }
}

class Person {
    constructor(name, age = null) {
        this.name = name;
        this.age = age;
    }
}

class Transaction {
    constructor(from, to, sum) {
        this.from = from;
        this.to = to;
        this.sum = sum;
        this.date = new Date();
    }
}

let account_owner1 = new Person("Micke", 44);
let account1 = new BankAccount(account_owner1);
account1.deposit(200);
account1.withdraw(80);

let account_owner2 = new Person("Karro", 42);
let account2 = new BankAccount(account_owner2);
account2.deposit(300);
account2.withdraw(20);

let account_owner3 = new Person("Kalle", 28);
let account3 = new BankAccount(account_owner3);

console.log(account1);
console.log(account2);
console.log(account3);

account2.transfer(account1, 50);
account2.transfer(account1, 20);
account1.transfer(account2, 75);
account2.transfer(account3, 100);

account1.statement();
console.log('------');
account2.statement();
console.log('------');
account3.statement();