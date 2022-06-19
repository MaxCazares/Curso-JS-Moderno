let diaHoy = new Date();

moment.locale('es');
console.log(moment().format('MMMM D YYYY h:mm:ss a'));

console.log(moment().format('LLLL', diaHoy));