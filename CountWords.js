let count_words = "Create a function that counts words in a string";

function count_string(str) {
    console.log(str.split(' ').length);
    console.log(str.split(' '));
}

count_string(count_words)

console.log('--'.repeat(10), 'Two', '--'.repeat(10))

function count_string2(str) {
    let count = 0;
    for (const i of str.split(' ')) {
        console.log(`${i} - ${count ++} `)
    }
}
count_string2(count_words)