localStorage.setItem('nombre', 'Max');
sessionStorage.setItem('nombre', 'Max');

const producto = {
    nombre: 'PS5',
    precio: 15000
}

const productoString = JSON.stringify(producto);
console.log(productoString);

localStorage.setItem('producto', productoString);

const meses = ["Enero", "Febrero", "Marzo"];
localStorage.setItem('meses',JSON.stringify(meses));