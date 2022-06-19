//trim es un método que quita los espacios en blanco de un string
let hola = '       hola       ';
console.log(hola);
console.log(hola.length);
console.log(hola.trim());
console.log(hola.trim().length);

// Se pueden eliminar los espacios al inicio o al final 
console.log(hola.trimStart());
console.log(hola.trimStart().length);
console.log(hola.trimEnd());
console.log(hola.trimEnd().length);