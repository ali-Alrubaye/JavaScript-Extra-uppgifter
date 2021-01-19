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
    for (let i = 0; i < 8; i++) {
        let arr = myArray[i] + myArray[i + 1];
        myArray.push(arr);
    }
    return myArray;
}

console.log(fibonacci());

console.log('#'.repeat(20))

function fibonacci2(number) {
    if (1 === number) {
        return [0, 1]
    } else {
        let serien = fibonacci2(number - 1);
        serien.push(serien[serien.length - 2] + serien[serien.length - 1]);
        return serien;
    }
}

console.log(fibonacci2(8))

function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
console.log('#'.repeat(20))
console.log(pow(3, 2)); // 27

/**
 * Factorials
 * n! = n(n-1)(n-2)....
 * 0! = 1 (by definition)
 * 1! = 1
 * 2! = 2 * 1 = 2
 * 3! = 3 * 2 * 1 = 6
 */
function factorials(n) {
    if (n === 0) {
        return 1;
    } else {
        n = n * factorials(n - 1);
        return n
    }
}
console.log('#'.repeat(20))
console.log(factorials(3))