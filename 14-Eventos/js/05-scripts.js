// Eventos con el scroll

window.addEventListener("scroll", e =>{
    const premium = document.querySelector(".premium");
    const ubicacion = premium.getBoundingClientRect();
    
    if(ubicacion.top < 100)
        console.log("el elemento ya es visible");
    else
        console.log("sigue scrolleando");
});