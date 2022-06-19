const monitor = "Monitor de 20 pulgadas";

// replace para reemplazar
console.log(monitor);
console.log(monitor.replace("pulgadas","\""));
console.log(monitor.replace("Monitor","Monitor curvo"));

// slice para dividir un string
console.log(monitor.slice(5, 10))
console.log(monitor.slice(10))
console.log(monitor.slice(10,8))     //no muestra nada

// substring: alternativa de slice
console.log(monitor.substring(10,8))  //invierte los indices y reliza la subcadena