/**
 * Skriv funktioner som tar emot strängar och returnerar:

Antalet bokstäver i ett ord i genomsnitt.
Det kortaste ordet.
Det längsta ordet.
Det mittersta ordet.
 */

let myString = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laborum sint voluptates quas nobis";

function word_length(st) {
    let word = st.split(' ').map(c => c);
    let reducer = word.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0);
    return reducer / word.length;
}

function word_minMax_length(st) {
    let word = st.split(' ').map(c => c);
    let count_char = word.map(c => c.length);
    let shortest = Math.min(...count_char);
    let longest = Math.max(...count_char);
    let middle = Math.floor(word.length / 2);
    console.log(`kortaste: ${word[shortest]}, längsta: ${word[longest]}, mittersta: ${word[middle]}`)
}

function word_minMax_length2(st) {
    let shortest = '';
    let longest = '';
    let middle = '';
    let word = st.split(' ').map(c => c).sort((a, b) => a.length - b.length);
    console.log(word)
}
word_minMax_length(myString)