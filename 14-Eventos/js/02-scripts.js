// Eventos con el mouse
const nav = document.querySelector(".navegacion");

// Registrar un evento
// Al hacer click en la barra de navegación se activa el evento
nav.addEventListener("click", () =>{
    console.log("click en la navegación");
});

// Al colocar el cursor sobre la barra de navegación se activa el evento
nav.addEventListener("mouseenter", () =>{
    console.log("entrando a la navegación");
    nav.style.backgroundColor = "transparent";
});

// Al sacar el cursor sobre la barra de navegación se activa el evento
nav.addEventListener("mouseout", () =>{
    console.log("saliendo de la navegación");
    nav.style.backgroundColor = "white";
});

// Al hacer doble click sobre la barra de navegación se activa el evento
nav.addEventListener("dblclick", () =>{
    console.log("doble click en la navegación");
    nav.style.backgroundColor = "gray";
});

// Al soltar el click sobre la barra de navegación se activa el evento
nav.addEventListener("mouseup", () =>{
    console.log("mouseup en la navegación");
    nav.style.backgroundColor = "red";
});