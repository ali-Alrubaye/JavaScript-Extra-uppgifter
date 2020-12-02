/**
 * Gör en funktion: get_min_max(). Funktionen ska ta en rest-parameter och ta emot minst 2 tal och som mest 7 tal som in-parametrar.
Din funktion ska kontrollera antalet tal och returnera false om parametrarna är felaktiga.
Funktionen ska räkna ut det högsta respektive det lägsta talet av de fyra du skickade in och ge ut de två svaren till den som anropar metoden genom att returnera ett objekt med egenskaperna min och max.
Skriv kod som anropar get_min_max och skriver ut min respektive max. Ingen utskrift ska ske i funktionen, funktionen ska returnera ett objekt.
 */

function get_min_max(...rest_param) {
    const paramLength = rest_param.length;
    if (paramLength < 2) {
        return console.log(`Du måste skriva minst två tal`)
    } else if (paramLength > 7) {
        return console.log(`Du måste skriva mindare än 7 tal`)
    }
    console.log(Math.min(...rest_param), Math.max(...rest_param))
}
get_min_max(1, 2, -3, 4, 5, 6)