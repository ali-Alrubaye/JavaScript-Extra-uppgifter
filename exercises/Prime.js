/**
 * Ett primtal är bara jämnt delbart med sig själv. Skriv en funktion som tar en parameter och kontrollerar om talet är ett primtal eller inte.
 */

function primtal(num) {
    if (num < 2) {
        return `${num} ej primtal`;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return `${num} ej primtal`;
        }
    }
    return `${num} primtal`;
}

for (let i = 0; i < 15; i++) {
    console.log(primtal(i))
}