function every_nth(arr, num) {
    return arr.filter((e, i) => i % num === num - 1)
}

console.log(every_nth([1, 2, 3, 4, 5, 6], 1));
console.log(every_nth([1, 2, 3, 4, 5, 6], 2));
console.log(every_nth([1, 2, 3, 4, 5, 6], 3));
console.log(every_nth([1, 2, 3, 4, 5, 6], 4));