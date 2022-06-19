const wm = new WeakMap();

const producto = {
    idproducto: 10
}

wm.set(producto, 'monitor');

console.log(wm);
console.log(wm.has(producto));
console.log(wm.get(producto));
console.log(wm.delete(producto));
console.log(wm);