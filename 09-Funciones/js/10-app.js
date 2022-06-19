// Function Expression
const aprendiendo = function(name){
    console.log(`Aprendiendo ${name}`);
}
aprendiendo("Javascript");

// Arrow functions
const aprendiendo2 = (name) => console.log(`Aprendiendo ${name}`);
aprendiendo2("cosas del diablo");

// Cuando es solo una línea dan por implicito el return
const aprendiendo3 = name => `Aprendiendo ${name}`;
console.log(aprendiendo3("anime"));