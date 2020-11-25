let palindString = 'Ni talar bra latin';
let normalString = 'Lorem ipsum';

function checkString(st) {
    let reverseSt = st.toLowerCase().replace(/ /g, '');
    let str = st.toLowerCase().replace(/ /g, '');
    for (let i = 0; i < str.length; i++) {
        if (str[i] === reverseSt[i]) {
            console.log(`${str[i]} - ${reverseSt[i]} true`)
        } else {
            console.log(false)
        }

    }
}
checkString(palindString);

function palindrome(str) {
    let newStr = str.toLowerCase().replace(/ /g, '').split('').join('');
    var len = newStr.length;
    var mid = Math.floor(len / 2);

    for (var i = 0; i < mid; i++) {
        if (newStr[i] !== newStr[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
console.log(palindrome('Ni talar bra latin'));