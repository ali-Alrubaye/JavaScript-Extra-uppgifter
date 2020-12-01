const rows = 11;
const colums = 11;
const firstRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let gridArray = new Array(rows);

for (let i = 0; i < gridArray.length; i++) {
    gridArray[i] = new Array(colums);
}



let start = 0;

for (let i = 0; i < gridArray.length; i++) {
    for (let j = 0; j < gridArray[i].length; j++) {
        if (i == 0 && j == 0) {
            gridArray[i][j] = " ";
        } else if (i == 0 && j > 0) {
            gridArray[i][j] = firstRows[j - 1];
        } else if (j == 0 && i > 0) {
            gridArray[i][j] = i;
        } else {
            gridArray[i][j] = `${firstRows[j -1 ]}${[i]}`;
        }

        start = start + 1;
    }
}


// console.log(gridArray)
function findindex(coor, mark) {
    let upperCoor = coor.toUpperCase().replace(/ /g, '').split('');
    let coor0 = firstRows.indexOf(upperCoor[0]) + 1;
    let coor1 = upperCoor[1];

    for (let i = 1; i < gridArray.length; i++) {
        for (let j = 1; j < gridArray[i].length; j++) {
            if (gridArray[i][j] == gridArray[coor1][coor0]) {
                if (gridArray[i][j] == coor) {
                    gridArray[i][j] = mark;
                    return false;
                } else {
                    gridArray[i][j] = mark;
                    return true;
                }
            }
        }
    }
}

function setship(coor) {
    console.log(findindex(coor, 'X'));
}

function shoot(coor) {
    console.log(findindex(coor, 'O'));
}
setship('B2');
shoot('E2');
console.log(gridArray)