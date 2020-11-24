/**
 * Skriv en funktion som tar ett år (number) som parameter och returnerar true om året är ett skottår, annars false.
Skriv en annan funktion som tar två parametrar, start_year och end_year, och som skriver ut varje år i intervallet och om året är ett skottår eller inte.
 */

function getLeapYear(year) {
    return year % 4 == 0 ? `${year} är Skottår` :
        year % 100 == 0 ? `${year} är Skottår` :
        year % 400 == 0 ? `${year} är Skottår` : `${year} är inte Skottår`
}

function leapYear(start, end) {
    for (let year = start; year <= end; year++) {
        console.log(getLeapYear(year))
    }
}
leapYear(2010, 2020);