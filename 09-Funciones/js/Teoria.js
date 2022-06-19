// example of function
function myFirstFunction(/*parameters*/){
    console.log("Hello there");
}
myFirstFunction();

function substraction(a, b){
    console.log(a - b);
}
substraction(10, 5);

// if we write 'var/let/const' within a function the variable it would be able only for that function
// however if we don't do that automatically it becomes in a global variable
var myGlobal = 10;

function fun1(){
    oopsGlobal = 5;
}
function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined")
        output += "myGlobal: " + myGlobal;

    if (typeof oopsGlobal != "undefined")
        output += "\noopsGlobal: "+ oopsGlobal;
    console.log(output);
}
fun1();
fun2();

// It is possible to have local and global variables with the same name
// if we do that the local variable takes precedence over the global one
var outerwear = "T-Shirt";
function myOutfit(){
    var outerwear = "sweater"
    return outerwear;
}
console.log(myOutfit());
console.log(outerwear);

// normal return functions
function timesFive(num){
    return num * 5;
}
console.log(timesFive(25));

// Assigment with a returned value

var changed = 0;
function change(num){
    return (num + 5) / 3;
}
changed = change(10);
console.log(changed);

// Switch
function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1: answer = "Alpha"
        break
        case 2: answer = "Betta"
        break
        case 3: answer = "Gamma"
        break
        case 4: answer = "Delta"
        break
    }
    return answer
}

console.log(caseInSwitch(4))

function switchOfStuff(val){
    var answer = "";
    switch(val){
        case "a": answer = "apple"
        break
        case "b": answer = "bird"
        break
        case "c": answer = "cat"
        break
        case "d": answer = "dice"
        break
    }
    return answer
}

console.log(switchOfStuff("d"))

function sequentialSizes(val){
    var answer = ""
    switch(val){
        case 1:
        case 2:
        case 3: answer = "Low"
        break
        case 4: 
        case 5:
        case 6: answer = "Mid"
        break
        case 7: 
        case 8:
        case 9: answer = "High"
        break
    }
    return answer
}
console.log(sequentialSizes(1))
console.log(sequentialSizes(2))
console.log(sequentialSizes(3))
console.log(sequentialSizes(4))
console.log(sequentialSizes(5))
console.log(sequentialSizes(6))
console.log(sequentialSizes(7))
console.log(sequentialSizes(8))
console.log(sequentialSizes(9))