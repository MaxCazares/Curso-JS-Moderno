// We can store anytype of data in an array even
// different type of data in the same array
var arrayA = ["John", 23];
console.log(arrayA[0])  //"John"

// We can modify an array with indexes and bracket notation
var arrayC = [18,64,99];
arrayC[1] = 45;  //[18,45,99]

// We can have nest arrays, it means, arrays store another arrays
var arrayB = [["Bulls", 23], ["White Sox", 45]];
console.log(arrayB[0])  //["Bulls", 23]
console.log(arrayB[1][1])  //45

// push function
// it adds an element at the end of the array, no matters the element
var arrayD = [["John", 40], ["Ringo", 40]];
arrayD.push(["Paul", 42]);
console.log(arrayD); // [["John", 40], ["Ringo", 40], ["Paul", 42]]

// pop function
// it removes the last element from an array
var arrayE = [["John", 40], ["Ringo", 40], ["Paul", 42]];
arrayE.pop();
console.log(arrayE); //[["John", 40], ["Ringo", 40]]

// shift function
// it revomes the first element from an array
var arrayF = [["John", 40], ["Ringo", 40], ["Paul", 42], ["George", 43]];
arrayF.shift();
console.log(arrayF); //[["Ringo", 40], ["Paul", 42], ["George", 43]]

// unshift function
// it insert an element at the start of the array
var arrayG = [["Ringo", 40], ["Paul", 42], ["George", 43]];
arrayG.unshift(["John", 40]);
console.log(arrayG); //[["John", 40], ["Ringo", 40], ["Paul", 42], ["George", 43]]