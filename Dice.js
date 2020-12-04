/**
 * Skriv klassen Die med egenskapen value.
Lägg till metoden throw() som ger tärningen ett nytt värde från 1 till 6.
Anropa metoden throw() i  konstruktorn.
Skapa ett objekt av klassen, anropa throw() några gånger och skriv ut objektet efter varje gång så du ser att värdet ändras.
Skriv klassen Dice med egenskapen dice, som ska innehålla en array.
Låt konstruktorn ta emot en parameter som säger hur många tärningar vi vill skapa med default-värdet 5 och lägg till så många objekt av klassen Die i egenskapen dice.
Lägg till metoden throw() som slår alla tärningarna med hjälp av metoden throw() i Die-klassen.
Skapa ett objekt av klassen, anropa throw() några gånger och skriv ut objektet efter varje gång så du ser att värdena ändras.
 */

class Die {
    constructor() {
        this.value = '';
        this.throw_new_die();
    }
    throw_new_die() {
        this.value = Math.floor((Math.random() * 6) + 1);
    }
}

class Dice {
    constructor(no_of_dice = 5) {
        this.dice_objects = [];

        for (let i = 0; i < no_of_dice; i++) {
            this.dice_objects.push(new Die());
        }
    }
    throw () {
        for (const current_dice of this.dice_objects) {
            current_dice.throw_new_die();
        }
    }
}
let newDice = new Dice();
console.log(newDice)
newDice.throw();
console.log(newDice)