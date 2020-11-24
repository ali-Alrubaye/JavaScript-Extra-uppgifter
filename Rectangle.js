/** Del 1
 * Skriv klassen Rectangle med egenskaperna width och height.
Lägg till parametrarna width och height i konstruktorn med default-värdena 6 och 4.
Lägg till metoder som returnerar rektangelns omkrets och area.
Skapa objekt och testa.
 */

class Rectangle {
    constructor(width = 6, heght = 4) {
        this.width = width;
        this.heght = heght;
    }
    circumference() {
        return (this.width + this.heght) * 2;
    }
    area() {
        return (this.width * this.heght);
    }
}

let rect = new Rectangle();
console.log(rect.circumference())
console.log('Rectangle area ', rect.area())

/** Del 2
 * Skriv klassen Square som ärver av klassen Rectangle. Fundera över hur många parametrar som kan vara lämpliga i konstruktorn.
 */
class Square extends Rectangle {
    constructor(width) {
        super(width)
    }
    circumference() {
        return this.width * 4;
    }
    area() {
        return this.width * this.width;
    }
}
// let square1 = new Square(5);
// console.log('Square circumfernce ', square1.circumference());
// console.log('Square Area ', square1.area());