/**
 * Part 1: Refactoring Old Code
 */
console.log(`
Part 1: Refactoring Old Code`)

const csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
let rowString = "";

// Iterate through the characters of csvString.
// Store each “cell” of data in a variable.
// Move to the next cell when character is a comma
// Move to the next row when character is the "\n" escape sequence
// Log each row of data.
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
let columns; // Stores the number of columns in each row of data within csvString2.

let cell = 0;
let row = 0;

// Iterate through the characters in csvString2 and determine which character to add to an entry, when to add a new entry, and when to add a new row.
// Store results in a two-dimensional array.
// Each row is its own array, with individual entries for each column (entry).
// Store all the rows in a parent array, with the heading - first - row located at index 0.
// Cache this two-dimensional array in a variable for later use.
for (const char of csvString2) {
    if (char === ",") {
        cell++;
        rowArray[cell] = "";
    } else if (char === "\n") {
        csvStrArray[row] = rowArray;
        columns = csvStrArray.at(0).length;
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
 * Part 3: Transforming Data
 */
console.log(`
Part 3: Transforming Data `)

// Extract the first element (heading row) from cvsStrArry
let headingRow = csvStrArray.splice(0, 1);
// Extract the elements (cells) from the heading row (headingRow)
let headingRowCells = headingRow[0].slice(0, headingRow[0].length);
// I consulted Google, and Stack Overflow to write this line
// Make all the letters in the cells lowercase
const lowerHRow = headingRowCells.map(cell => cell.toLowerCase());

let csvObjects = [];
let hCell = 0;
let objectRowI = 0;
let objectRow = {};
let objectRowKey;

// Iterate through the remaining elements (rows) in csvStrArray and their respective elements (cells)
// Pair each cell with its corresponding heading in lowerHRow as key : value pairs
// Add these pairs to the objectRow object as properties
// Add objectRow to the csvObjects array as an element
// Clear objectRow of its properties and move on to the next index in csvObjects
csvStrArray.forEach((arrRow) => {
    arrRow.forEach((rCell) => {
        objectRowKey = lowerHRow[hCell];
        objectRow[objectRowKey] = rCell;
        hCell++;
    })
    csvObjects[objectRowI] = objectRow;
    objectRowI++;
    objectRow = {};
    hCell = 0;
})

console.log(csvObjects);


/**
 * Part 4: Sorting and Manipulating Data
 */
console.log(`
Part 4: Sorting and Manipulating Data `)

// Remove the last element from csvObjects.
csvObjects.pop();
//console.log(csvObjects);
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
csvObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
//console.log(csvObjects);
// Add the following object to the end of csvObjects:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
csvObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(csvObjects);


let avgAge = 0;
let ageCount = 0;

// Iterate through the csvObjects array and calculate the average age of the group of objects 
// using the value of the 'age' key in each object and the length of the array.
csvObjects.forEach((oRow) => {
    for (const key in oRow) {
        if (key === "age") {
            ageCount++;
            avgAge += parseInt(oRow[key]); // I consulted Google for this line
            if (ageCount === csvObjects.length) {
                avgAge /= ageCount;
            }
        }
    }
})
console.log(`Average age of the above group: ${avgAge} years`)


/**
 * Part 5: Full Circle
 */
console.log(`
Part 5: Full Circle`)

// Transform the final set of data back into CSV format.
let csvString3 = "";
let headCell = "";

// Iterate through the keys in the first object in csvObjects
// Make "id" uppercase and capitalize the remaining keys
// Add these modified keys to csvString3 where the CSV data is being stored
// Include "\n" escape character after the last key, ensuring that the following value in csvString3 won't be preceeded by a comma
for (const key in csvObjects[0]) {
    headCell = key;
    headCell = headCell.slice(0, 1).toUpperCase() + headCell.slice(1, headCell.length);
    if (key == "age") {
        csvString3 += `${headCell}\\n`;
    } else if (key == "id") {
        headCell = headCell.toUpperCase();
        csvString3 += `${headCell},`;
    } else {
        csvString3 += `${headCell},`;
    }
}

let keyCount = 0;
let rowCount = 1;
// Iterate through the values of each object in the csvObjects array
// Add each to csvString3, all with a comma afterwards except the last value
// Include "\n" escape character after the last value, ensuring that the following value in csvString3 won't be preceeded by a comma
// Ensure that the very last value doesn't have the escape character afterwards
csvObjects.forEach((oRow) => {
    for (const key in oRow) {
        keyCount++;
        if (keyCount === columns && rowCount < csvObjects.length) {
            csvString3 += `${oRow[key]}\\n`;
        } else {
            csvString3 += `${oRow[key]},`;
        }        
    }
    keyCount = 0;
    rowCount++;
})

console.log(csvString3);