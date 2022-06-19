// Eventos con el teclado

const busqueda = document.querySelector(".busqueda");

// El evento se ejecuta cuando presionas una tecla
busqueda.addEventListener("keydown", () => {
    console.log("keydown");
});

// El evento se ejecuta cuando presionas y sueltas una tecla
busqueda.addEventListener("keyup", () => {
    console.log("keyup");
});

// El evento se ejecuta cuando presionas fuera de la validación
busqueda.addEventListener("blur", () => {
    console.log("blur");
});

// El evento se ejecuta cuando copias algo
busqueda.addEventListener("copy", () => {
    console.log("copy");
});

// El evento se ejecuta cuando pegas algo
busqueda.addEventListener("paste", () => {
    console.log("paste");
});

// El evento se ejecuta cuando cortas algo
busqueda.addEventListener("cut", () => {
    console.log("cut");
});

// El evento se ejecuta cuando escribes algo
busqueda.addEventListener("input", (e) => {
    console.log(e.target.value);
});