// De momento todo nuestro código se ejecuta de arriba hacia abajo salvo cuando llamamos una función
// Algunas veces vas a desear que tu código se ejecute basado en una condición
// Cuando vas a un cajero, lo primero que haces es insertar tu tarjeta..
// Segundo colocas tu número, si el número esta bien, puedes continuar, sino, te dice que hubo un error
// Después eliges la operación que deseas hacer, si quieres retirar dinero, 
// el cajero va a revisar que tengas primero esa cantidad, no puedes retirar una cantidad que no tienes..
// Lo mismo pasa en programación, si no eres amigo de alguien en facebook, 
// no lo puedes contactar o escribir, dependiendo de la configuración tal vez 
// tampoco puedas darle me gusta  a su foto de perfil

// Y para ejecutar nuestro código basado en una condición, se utilizan las estructuras de control...

// Operador if
const puntaje = '1000';

// es igual
if(puntaje == 1000)
    console.log("Si es igual!");
else
    console.log("No no es igual");