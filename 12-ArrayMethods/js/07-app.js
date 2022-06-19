const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ["Agosto", "Septiembre"];
const meses3 = ["Octubre", "Noviembre", "Diciembre"];

// .concat junta los elementos de n arreglos en un solo arreglo
let resultado = meses.concat(meses2, meses3, "otro mes");
console.log(resultado);

// spread operator hace lo mismo que .concat
resultado = [...meses, ...meses2, ...meses3, "Otro mes"];
console.log(resultado);