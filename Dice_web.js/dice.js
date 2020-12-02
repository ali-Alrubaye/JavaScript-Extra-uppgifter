class Die {
    constructor() {
        this.value = '';
        this.throw();
    }
    throw () {
        this.value = Math.floor((Math.random() * 6) + 1);
        return this.value;
    }
}

class Dice {
    constructor(no_of_dice = 5) {
        this.no_of_dice = no_of_dice;
        this.dices = []
    }
    throw () {
        for (let i = 0; i < this.no_of_dice; i++) {
            this.dices.push(new Die());
        }
    }
    get_dices() {
        return this.dices;
    }
}

let single_dice1 = document.getElementById('diceS_1');
let single_dice2 = document.getElementById('diceS_2');

function dice_one() {
    let die1 = new Die();
    document.getElementById('diceS_1').innerHTML = `<img src="images/Alea_${die1.throw()}.png">`
}

function dice_two() {
    let die2 = new Die();
    document.getElementById('diceS_2').innerHTML = `<img src="images/Alea_${die2.throw()}.png">`
}

let startbtu = document.getElementById('startbtu');
let dices = document.querySelectorAll('.dice');

startbtu.addEventListener('click', function(e) {
    e.preventDefault();
    let dice_result = new Dice(2);
    dice_result.throw();
    let test = dice_result.get_dices();
    for (let i = 0; i < test.length; i++) {
        dices[i].innerHTML = `<img src="images/Alea_${test[i].value}.png">`
    }
})