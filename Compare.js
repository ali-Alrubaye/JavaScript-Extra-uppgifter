let array_one = [1, 2, 3, 4, 5];
let array_two = [2, 3, 6];

let newArray = []

function compare_arrays(arr1, arr2) {
    arr1.forEach((e1) => arr2.forEach((e2) => {
        if (e1 === e2) {
            newArray.push(e1)
        }
    }));
    return newArray;
}

function compare_arrays2(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                newArray.push(arr1[i])
            }
        }
    }
    return newArray;
}
console.log(compare_arrays2(array_one, array_two));