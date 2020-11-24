/**
 * Skapa klassen Vehicle med egenskaperna model, make, color, speed, no_of_wheels samt max_speed.
Skapa klasserna Truck, Motorcycle och Car som ärver från Vehicle. Konstruktorerna ska kalla på föräldrakonstruktorerna.
Truck ska ha max-hastigheten 50, Motorcycle ska ha max-hastigheten 200 och Car ska ha 180. Dessa värden ska inte kunna ändras i konstruktorn.
De andra egenskaperna ska kunna sättas i konstruktorn.
Egenskapen no_of_wheels ska ha olika default-värden för olika klasser (MC: 2, bil: 4, lastbil: 6) men man ska kunna ange no_of_wheels i konstruktorn om man vill.
 */
class Vehicle {
    constructor(model, make, color, speed = 0, no_of_wheels, max_speed = 0) {
        this.model = model;
        this.make = make;
        this.color = color;
        this.speed = speed;
        this.no_of_wheels = no_of_wheels;
        this.max_speed = max_speed;
    }
    speed_up(speed) {
        let result = this.speed + speed;
        result > this.max_speed ? console.log(`${this.model} fordon hastigheten kan inte går över max speed ${this.max_speed } km sänka ner ${result - this.max_speed} km`) :
            console.log(`${this.model} hastigheten ${result}km gåttupp ${speed}km`)
    }
    speed_down(speed) {
        let result = this.speed - speed
        result < 0 ? console.log(`${this.model} fordon hastigheten kan inte går under lägsta hastighet 0 km höga up ${result} km`) :
            console.log(`${this.model} hastigheten ${result}km gåttupp ${speed}km`)
    }
}
class Truck extends Vehicle {
    constructor(model, make, color, speed, no_of_wheels = 4) {
        super(model, make, color, speed, no_of_wheels);
        this.max_speed = 50;
    }
}
class Motorcycle extends Vehicle {
    constructor(model, make, color, speed, no_of_wheels = 2) {
        super(model, make, color, speed, no_of_wheels);
        this.max_speed = 200;
    }
}
class Car extends Vehicle {
    constructor(model, make, color, speed, no_of_wheels = 4) {
        super(model, make, color, speed, no_of_wheels)
        this.max_speed = 180;
    }
}
let truck1 = new Truck('Truck1', 'Tru', 'blue', 50, 4);
let truck2 = new Truck('Truck2', 'Tru', 'red', 40, 4);
let truck3 = new Truck('Truck3', 'Tru', 'orange', 30, 4);

let motorcycle1 = new Motorcycle('Motorcycle1', 'Motor', 'blue', 200, 2);
let motorcycle2 = new Motorcycle('Motorcycle1', 'Motor', 'red', 110, 2);
let motorcycle3 = new Motorcycle('Motorcycle1', 'Motor', 'orange', 90, 2);

let car1 = new Car('Ford', 'Mustang', 'red', 120, 4);
let car2 = new Car('Ford', 'Mustang', 'red', 140, 4);
let car3 = new Car('Ford', 'Mustang', 'red', 100, 4);
car1.speed_up(20);
car1.speed_down(15);
console.log(car1)