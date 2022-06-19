const suma = (a,b) => a + b;
const resta = (a,b) => a - b;

let resultado = suma(1,2);
let esperado = 3;

if(resultado !== esperado){
    console.error('la prueba falló');
}else{
    console.log('prueba exitosa');
}

resultado = resta(10,5);
esperado = 4;

if(resultado !== esperado){
    console.error('la prueba falló');
}else{
    console.log('prueba exitosa');
}