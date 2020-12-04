function random_number(number = 100) {
    return Math.round(Math.random() * number);
}

function guess_number() {
    let random = random_number();
    let continue_game = true;
    let counter = 0;
    let message = "";

    while (continue_game) {
        let answer = prompt(message + "\nJag tänker på ett nummer 1-100. Vilket tror du det är? (Avsluta med Avbryt.)");
        let guess = Number(answer);
        counter++;

        if (!guess) {
            continue_game = false;
            break;
        }

        if (guess < random) {
            message = "Mitt tal är större.";
        } else if (guess > random) {
            message = "Mitt tal är mindre.";
        } else {
            continue_game = confirm(`Du gissade rätt! det tog ${counter} gissningar! Spela igen?`);
            counter = 0;
            message = "";
            random = random_number();
        }
    }
}