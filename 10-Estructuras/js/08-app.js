// Buenas practicas con ifs...
// Veamos algunas buenas practicas, sencillas para escribirs ifs
// una muy común es que muchas personas hacen lo siguiente...

const autenticado = true;

if(autenticado === true)
    console.log('El Usuario esta autenticado')

// Debido a que el IF ya retorna true, puedes eliminarlo y tu código será mejor..
// También muchas personas escriben ifs pensando que se podrán ejecutar
// 2 condiciones al mismo tiempo, el if solo va a ejecutar la primera que se cumpla...

const puntaje = 500;

if(puntaje > 300)
    console.log('Buen puntaje... felicidades');
else if(puntaje > 400)
    console.log('Excelente esfuerzo')
else
    console.log('No sabria decirte, pero buen esfuerzo...')