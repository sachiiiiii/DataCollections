/**
 * Part 1: Refactoring Old Code
 */
// console.log(`
// Part 1: Refactoring Old Code`)

// const csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
// const csvStrArray = [,];
// let rowArray = [""];

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

