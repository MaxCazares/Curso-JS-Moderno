let diaHoy = new Date();
console.log(diaHoy);

let currentYear = diaHoy.getFullYear();
console.log(currentYear);

let currentMonth = diaHoy.getMonth();
console.log(currentMonth);

console.log(diaHoy.toLocaleDateString());
console.log(diaHoy.toLocaleString());
console.log(diaHoy.toLocaleTimeString());