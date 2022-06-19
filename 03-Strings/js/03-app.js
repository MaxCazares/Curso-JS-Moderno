// Podemos concatenar Strings con '+' o '+='
// El primero concatena dos strings
// El segundo añade un string en la misma variable

var one = "This is the start",
    two = "This is the end";
console.log(one + two);

var ourStr = "I come first";
ourStr += " I come second";
console.log(ourStr);

// Otra forma de concatenar string es:
console.log("Esta es la 1ra variable: " + one + " y esta es la 2da: " + two);

// Existe otra forma pero usa la siguiente sintaxis `${}`
console.log(`Esta es la 1ra variable: ${one} y esta es la segunda ${two}`)