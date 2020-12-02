/**
 * Skriv en klass som beskriver böcker och en klass som beskriver författare.
Ge författar-klassen egenskapen books och låt den innehålla de bok-objekt som författaren har skrivit.
Skriv en metod i bok-klassen som skriver ut boken på något bra sätt, t ex: "Mio, min Mio, 373 sidor, äventyr". (Ni får anpassa lite om ni vill.)
Skriv en metod i författarklassen som skriver ut alla författarens böcker.
Skriv en metod i författarklassen som sorterar hens böcker på titel.
Skriv en metod i författarklassen som sorterar hens böcker på utgivningsår.
 */
class Book {
    constructor(title, pages, type, year) {
        this.title = title;
        this.pages = pages;
        this.type = type;
        this.year = year;
    }
}
class Author {
    constructor(author_name) {
        this.author_name = author_name;
        this.author_books = [];
    }
    sort_func(a, b) {
        if (a < b) {
            return -1
        } else if (a > b) {
            return 1
        }
        return 0
    }
    throw (title, pages, type, year) {
        this.author_books.push(new Book(title, pages, type, year))
    }
    print() {
        return this.author_books;
    }
    sortByTitle() {
        // this.author_books.sort((a, b) => this.sort_func(a.title, b.title));
        this.author_books.sort((a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0);
    }
    sortByPublishYear() {
        this.author_books.sort((a, b) => this.sort_func(a.year, b.year));

    }
}

let author1 = new Author('Ali')
author1.throw("c", "373 sidor", "äventyr", "1991")
author1.throw("B", "373 sidor", "äventyr", "1992")
author1.throw("A", "373 sidor", "äventyr", "1993")
    // console.log(author1)
let author2 = new Author('Bakr')
author2.throw("AMio2, min Mio", "373 sidor", "äventyr2", "1980")
author2.throw("BMio2, min Mio", "373 sidor", "äventyr2", "1980")
    // console.log(author2)

// console.log(author1.print())
author1.sortByTitle()
console.log(author1.print())
console.log("#".repeat(10))
author1.sortByPublishYear()
console.log(author1.print())