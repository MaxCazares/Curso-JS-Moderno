// Math es parte de la ventana global de JavaScript
// tiene una serie de operaciones que pueden ser muy útiles
//  y algunas actuan de forma algo extraña

let resultado; 

// Pi
resultado = Math.PI; 
console.log(resultado);         //3.141592653589793

// redondeo
resultado = Math.round(2.5);    //3
console.log(resultado);

// redondeo hacia arriba
resultado = Math.ceil(2.2);     //3
console.log(resultado);

// redondeo hacia abajo
resultado = Math.floor(2.62);   //2
console.log(resultado);

// Raiz cuadrada
resultado = Math.sqrt(144);     //12
console.log(resultado);

// Abssoluto
resultado = Math.abs(-300);     //300
console.log(resultado);

// Potencia
resultado = Math.pow(8, 3);     //512
console.log(resultado);

// Minimo
resultado = Math.min(3,5,1,2,9,4,2, -3);   //-3
console.log(resultado);

// Max
resultado = Math.max(4,1,21,4,15,5,11,5);  //21
console.log(resultado);

// Aleatorio
resultado = Math.random();                 
console.log(resultado);

// Aleatorio dentro de un rango:
resultado =  Math.floor(Math.random() * 30 );
console.log(resultado);