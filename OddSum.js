/**
 * Skriv en funktion som tar emot ett okänt antal tal i en rest-parameter och räknar ihop summan av alla udda tal och returnerar det.
Använd en filter-funktion och en reduce-funktion.
 */

function sum(...params) {
    return params.filter(x => x % 2 !== 0).reduce((accumulated, value) => accumulated + value, 0);
}

// console.log(sum(1, 2, 3, 4, 5, 6, 7))
let num = [];
for (let i = 0; i < 10; i++) {
    num.push(i);
}
console.log(sum(...num))