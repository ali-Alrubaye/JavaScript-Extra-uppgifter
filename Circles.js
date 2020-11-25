class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get_area() {
        return Math.PI * this.radius * this.radius;
    }
    get_perimeter() {
        return 2 * Math.PI * this.radius;
    }
    circle_in_square_area(circle_area) {
        let sqSide = this.radius + this.radius;
        let square_area = sqSide * sqSide;
        let result = square_area - circle_area;
        return result;
    }
}

let circles = [3, 6, 8, 10];

var c = new Circle(3);

console.log(`Area = ${c.get_area().toFixed(2)}`);
console.log(`perimeter = ${c.get_perimeter().toFixed(2)}`);
console.log(`square not occupied = ${c.circle_in_square_area(c.get_area()).toFixed(2)}`);