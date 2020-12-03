let myString = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laborum sint voluptates quas nobis ab at";

function acronym_char(st) {
    let newstring = '';
    let split_words = st.split(' ');
    for (const c of split_words) {
        newstring += c.charAt(0).toUpperCase() + c.substring(1) + ' '
    }
    return newstring;
}
let acronym2 = myString.split(' ').map(c => c.charAt(0).toUpperCase() + c.substring(1)).join(' ')
console.log(acronym2)
    // console.log(acronym_char(myString))