/**
 * Part 1: Refactoring Old Code
 * 
 * *** I did Part 1 this way at first. Then when I read Part 2 I realized I had done it that for my Part 1. 
 * // let csvStrArray = [,];
    // let rowArray = [""];
    // let columns = rowArray.length;


    // let row = 0;
    // for (const char of csvString) {
    //     if (char === ",") {
    //         rowArray[0] += `${char} `
    //     } else if (char === "\n") {
    //         csvStrArray.push(rowArray);
    //         rowArray = [""];
    //         row++;
    //         console.log(csvStrArray[row])
    //     } else {
    //         rowArray[0] += char;
    //     }
    // }

    // // I couldn't figure out a way to get the last row and the last cell in that row to be logged to console within the for of loop.
    // console.log(rowArray)
 */
console.log(`
Part 1: Refactoring Old Code`)

const csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
let rowString = "";


for (const char of csvString) {
    if (char === ",") {
        rowString += `${char} `
    } else if (char === "\n") {
        console.log(rowString)
        rowString = "";
    } else {
        rowString += char;
    }
}

// I couldn't figure out a way to log the last row and the last cell in that row to the console within the for of loop.
console.log(rowString)


/**
 * Part 2: Expanding Functionality
 */
console.log(`
Part 2: Expanding Functionality`)

const csvString2 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let csvStrArray = [];
let rowArray = [""];
let columns;

let cell = 0;
let row = 0;
for (const char of csvString2) {
    if (char === ",") {
        cell++;
        rowArray[cell] = "";
    } else if (char === "\n") {
        csvStrArray[row] = rowArray;
        // console.log(csvStrArray[row])
        columns = csvStrArray[0].length;
        rowArray.length = columns;
        rowArray = [""];
        row++;
        cell = 0;
    } else {
        rowArray[cell] += char;
    }
}

// I couldn't figure out a way to add the last row and the last cell in that row to csvStrArray within the for of loop.
csvStrArray[row] = rowArray;

console.log(csvStrArray)


/**
 * Part 2: Expanding Functionality
 */
console.log(`
    Part 2: Expanding Functionality`)