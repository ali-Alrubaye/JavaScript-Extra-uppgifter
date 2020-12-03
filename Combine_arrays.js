let array_one = [1, 2, 3, 4, 5];
let array_two = [6, 7, 8, 9, 10];

function combine_arrayes(arr1, arr2) {
    return new Array(...arr1, ...arr2)
}

console.log(combine_arrayes(array_one, array_two))