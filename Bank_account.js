// class Account {
//     constructor(account_holder, balance) {
//         this.account_holder = account_holder;
//         this.balance = balance;
//         this.account_list = [];
//     }
//     insert_money(insert = 0) {
//         return this.account_holder, this.balance + insert;
//     }
//     takeout_money(customer, takeout) {
//         if (customer) {
//             let find_customer = this.account_list.indexOf(x => x.id === customer.id) + 1;
//             if (find_customer <= 0) {
//                 this.account_list[find_customer].balance = this.account_list[find_customer].balance - takeout;
//             }
//         } else {
//             console.log('Du måste skriva en Id Konto')
//         }
//     }
//     print() {
//         this.account_list.forEach(element => {
//             // console.log(`${this.account_list} - ${this.balance}`)
//             console.log(element)
//         });
//     }
//     print_by_id(customer) {
//         let find_customer = this.account_list.find(x => x.id === customer.id);
//         if (find_customer) {
//             return find_customer
//         }
//         return 'Customer not found';
//     }
// }

// class Person {
//     static id_no = 1
//     constructor(fname, lname, email) {
//         this.id = Person.id_no++;
//         this.fname = fname;
//         this.lname = lname;
//         this.email = email;
//     }
// }


// let customer1 = new Person('Ali', 'al', 'ali@ali.com');
// let customer2 = new Person('Micke', 'Micke', 'Micke@Micke.com');
// let customer3 = new Person('Jessica', 'Jessica', 'Jessica@Jessica.com');

// let account1 = new Account(customer1, 20000);
// let account2 = new Account(customer2, 1000);
// let account3 = new Account(customer3, 4000);

// console.log(account1)
// account1.insert_money(customer1, 1000)
//     // console.log(account1)