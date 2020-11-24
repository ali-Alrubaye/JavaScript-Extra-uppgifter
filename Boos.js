class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
    print() {
        console.log(`${this.name} ${this.age}`);
    }
}
class Employee extends Person {
    constructor(name, age, salery) {
        super(name, age)
        this.salery = salery;
    }
}
class Boos extends Employee {
    constructor(name, age, salery, level) {
        super(name, age, salery)
        this.level = level;
    }
}
class Company {
    constructor(name) {
        this.name = name;
        this.employees = ["Kalle", "Lisa", "Ali"];

    }
    list_employees(employees = this.employees) {
        employees.forEach(e => {
            e instanceof Boos ? console.log(`${e.name} - ${e.level}`) :
                e instanceof Employee ? console.log(`${e.name} - Employee`) :
                console.log(e)
        })
    }
    add_employee(employee) {
        this.employees.push(employee)
    }
    saleries_sum(employ = this.employees) {
        let reducer_result = []
        employ.forEach(e => {
            if (e.salery) {
                reducer_result.push(e.salery)
            }
        })
        return reducer_result.reduce((accumulator, currentValue) => accumulator + currentValue);
    }
    list_bosses() {
        let result = this.employees.filter(e => {
            if (e instanceof Boos) {
                return e;
            }
        })
        this.list_employees(result);
    }
}
console.log("--".repeat(10), 'Employee Instance & Print Method', "--".repeat(10))
let emp = new Employee('Ali', 22, 2000)
emp.print();

console.log("--".repeat(10), 'Boos Instance & Print Method', "--".repeat(10))
let boos = new Boos('Kalle', 44, 5000, 'Administrator');
boos.print()

console.log("--".repeat(10), 'Company Instance ', "--".repeat(10))
let company1 = new Company('EC')
console.log(company1)
console.log("--".repeat(10), 'Call List Employees Method ', "--".repeat(10))
company1.list_employees();

console.log("--".repeat(10), 'Call Add Employee Method ', "--".repeat(10))
let emp1 = new Employee('Markos', 20, 1000)
company1.add_employee(emp1);
company1.list_employees();

console.log("--".repeat(10), 'Call List Employee Method -Employee & manager ', "--".repeat(10))
let chef1 = new Boos('Jessica', 44, 40000, 'Manager');
let chef2 = new Boos('Nisse', 34, 40000, 'Manager');
company1.add_employee(chef1);
company1.add_employee(chef2);
company1.list_employees();

console.log("--".repeat(10), 'Call Saleries Sum ', "--".repeat(10))
let saler_sum = company1.saleries_sum()
console.log(saler_sum)

console.log("--".repeat(10), 'Call list Bosses ', "--".repeat(10))
company1.list_bosses();