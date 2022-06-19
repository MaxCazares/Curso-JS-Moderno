// En la consola de Javascript al hacer el incremento 'tradicional'
// no se incrementara sino hasta que llamemos al contador nuevamente

// puntaje = 5
// puntaje++; => 5
// puntaje; => 6

// Si realizamos primero el incremento y luego llamamos la contador
// este se mostrará así

// puntaje = 5
// ++puntaje; => 6

let puntaje = 5;
console.log(puntaje);

puntaje++;
console.log(puntaje);

puntaje--;
console.log(puntaje);

++puntaje;
console.log(puntaje);

--puntaje;
console.log(puntaje);

puntaje += 3;
console.log(puntaje);

puntaje -= 3;
console.log(puntaje);