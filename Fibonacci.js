/**
 * En fibonacci-sekvens består av en serie tal där man får nästa tal i ordningen genom att lägga ihop de två talen innan:

1 kommer från att lägga ihop de två talen i serien innan (0 + 1)
2 kommer från att lägga ihop de två talen i serien innan (1 + 1)
3 kommer från att lägga ihop de två talen i serien innan (1 + 2)
5 kommer från att lägga ihop de två talen i serien innan (2 + 3)
8 kommer från att lägga ihop de två talen i serien innan (3 + 5)
osv
https://www.mathsisfun.com/numbers/fibonacci-sequence.html

Skriv en rekursiv funktion som räknar ut fibonacci-serien från 0 till ett godtyckligt tal.
 */
let myArray = [];

function fibonacci() {
    if (myArray.length == 0) {
        myArray[0] = 0;
        myArray[1] = 1;
    }
    for (let i = 0; i < 100; i++) {
        let arr = myArray[i] + myArray[i + 1];
        myArray.push(arr);
    }
    return myArray;
}

console.log(fibonacci())