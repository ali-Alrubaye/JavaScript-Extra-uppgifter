/**
 * Skriv en funktion som tar två parametrar och returnerar sant om den ena är positiv och den andra är negativ.
 */

function signsCondition(a, b) {
    return (a < 0) && (b >= 0) || (a >= 0) && (b < 0) ? true : false
}

console.log(signsCondition(1, -1))