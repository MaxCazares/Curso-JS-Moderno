// Event bubbling

const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const titulo = document.querySelector(".titulo");

cardDiv.addEventListener("click", e => {
    // Detiene el event bubbling
    e.stopPropagation();
    console.log("click en card");
});
infoDiv.addEventListener("click", e => {
    // Detiene el event bubbling
    e.stopPropagation();
    console.log("click en info");
});
titulo.addEventListener("click", e => {
    // Detiene el event bubbling
    e.stopPropagation();
    console.log("clic en el titulo");
});