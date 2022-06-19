// Veamos que son el Operador && y en el siguiente vemos que es el ||
// El Operador && Revisa que se cumplan ambas condiciones...
// Cuando vas a comprar en Amazon, primero debes tener una cuenta 
// y segundo debes tener suficiente saldo, además de que tu producto debe estar disponible...


// Vamos a crear un par de variables...

// Cambiar true o false...
const usuario = false;
const puedePagar = true;

if (usuario && puedePagar) 
    console.log('Tu Pedido se hizo con éxito...');
else
    console.log('hubo un error con tu pago.');

// Ahora si quieres darle mensajes de error más detallados a tus usuarios puedes revisar o negar una condición

if (usuario && puedePagar)
    console.log('Tu Pedido se hizo con éxito...');
else if (!usuario)
    console.log('Inicia sesión para realizar el pedido');
else if(!puedePagar)
    console.log('Fondos Insuficientes');
else
    console.log('hubo un error con tu pago.');