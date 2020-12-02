let myString = 'Reverse String';


console.log('--'.repeat(10), 'Reverse with String Length -Down', '--'.repeat(10))

function reverseString1() {
    let rev = '';
    for (let i = myString.length - 1; i > 0; i--) {
        rev += myString[i];
    }
    console.log(rev)
}
reverseString1()

console.log('--'.repeat(10), 'Reverse with Split, Reverse and Join ', '--'.repeat(10))
console.log(myString.split('').reverse().join(''))