/*
Lös problemen i koden. Exempel på körning visar följande:
Omgång 1
Tärningsvärden
5
4
1
2
3
-----
Antal tärningsvärden
1: 1
2: 1
3: 1
4: 1
5: 1
6: 0
[osv, fem omgångar]
*/

class Die {
    constructor() {
        this.value = this.getNewValue();

    }

    throw () {
        this.value = this.getNewValue();
    }

    getNewValue() {
        return Math.floor(Math.random() * 6);
    }
}

class Dice {
    constructor(size) {
        this.dice = [];
        this.dice_values = new Array(7).fill(0);

        for (let i = 0; i < size; i++) {
            this.dice.push(new Die("dice_" + (i + 1)));
        }
        // add this
        this.calculateDiceValues();
    }

    calculateDiceValues() {
        this.dice_values = new Array(7).fill(0);
        // delete s from map s
        this.dice.map(current_value => {
            this.dice_values[current_value.value]++;
        })
    }

    show_dice() { // delete space
        this.dice.map(current_value => {
            console.log(current_value); // delete innerHTML
        })
    }

    show_dice_values() {
        for (let i = 1; i < 7; i++) {
            console.log(i + ': ' + this.dice_values[i]); // add +
        }
    }

    throw () { // delete s from throw s
        for (let die of this.dice) {
            die.throw();
        }
        this.calculateDiceValues();
    }
}

let dice = new Dice(5);

for (let i = 1; i < 5; i++) {
    dice.throw(); // Get new dice values
    console.log('Omgång ' + i);
    console.log('Tärningsvärden');
    dice.show_dice(); // Show the values of the dice, like: 1, 1, 2, 4, 6
    console.log('-----');
    console.log('Antal tärningsvärden');
    dice.show_dice_values(); // Show how many of each value we have, like: 1: 2, 2: 1, 3: 0, 4: 1, 5: 0, 6: 1
    console.log('---------');
}