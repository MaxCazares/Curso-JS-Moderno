// Funciones que retornar un función

const obtenerCliente = () => () => console.log('Max');
const fn = obtenerCliente();
console.log(fn);
fn();