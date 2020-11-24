/**
 * Skapa en array som innehåller 10 provresultat, tal från 0 till 100, motsvarande hur många procent man klarat på tentan. Loopa igenom arrayen och skriv ut varje resultat och vilket betyg man får för detta resultat om gränsen för G går vid 50% och gränsen för VG går vid 80%.
 */

let provresultat = [30, 36, 40, 50, 60, 70, 80, 90, 100];

for (const procent of provresultat) {
    procent < 50 ? console.log(`${procent} IG`) :
        (procent > 50) && (procent < 80) ? console.log(`${procent} G`) :
        console.log(`${procent} VG`)
}