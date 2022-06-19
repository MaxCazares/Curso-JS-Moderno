// Los eventos se ejecutan después de que el documento se haya descargado


console.log("1");

document.addEventListener("DOMContentLoaded", () =>{
    console.log("2");
});

console.log("3")