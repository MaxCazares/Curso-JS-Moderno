// Prevenir Event Bubbling con Delegation

const cardDiv = document.querySelector(".card");

cardDiv.addEventListener("click", e => {
    if(e.target.classList.contains("titulo"))
        console.log("Este es el titulo");
    else
        if(e.target.classList.contains("precio"))
            console.log("Este es el precio");
    else
        if(e.target.classList.contains("card"))
            console.log("Este es el card");
});