// Previamente vimos los operadores ternarios, llegan a ser muy útiles 
// ya que te dan un código más simplificado, veamos como se utilizan...

const autenticado = false;
const puedePagar = false

console.log( autenticado  ? 'Si esta autenticado' : 'No esta autenticado');


// El || y el && también se pueden utilizar en el ternario

console.log( autenticado && puedePagar ? 'Si esta autenticado' : 'No esta autenticado');

// Ternario anidado...

console.log( autenticado  ?  puedePagar ? 'Si puede pagar' : 'esta autenticado pero no puede pagar' : 'No esta autenticado');