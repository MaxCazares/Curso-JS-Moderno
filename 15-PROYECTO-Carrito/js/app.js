const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];

cargarEvenListeners();
function cargarEvenListeners(){
    // Agrega un curso al carrito
    listaCursos.addEventListener("click", agregarCurso);

    // Elimina un curso del carrito
    carrito.addEventListener("click", eliminarCurso);

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener("click", () => {
        articulosCarrito = []; // reseteamos el carrito
        limpiarHTML(); // Eliminamos todo el html
    });
}

// Funciones
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Elimina un curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains("borrar-curso")){
        const cursoId = e.target.getAttribute("data-id");

        // Elimina del arreglo por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML(articulosCarrito); // volvemos a iterar sobre el carrito para actualizarlo
    }
}

// Leer el contenido del html y agregarlo al carrito
function leerDatosCurso(cursoSeleccionado){
    
    // Crear un objeto con el contenido del curso
    const infoCurso = {
        imagen: cursoSeleccionado.querySelector("img").src,
        nombreCurso: cursoSeleccionado.querySelector("h4").textContent,
        precio: cursoSeleccionado.querySelector(".precio span").textContent,
        id: cursoSeleccionado.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

    // Revisa si un elemento ya esta en el carrito
    const cursoExiste = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(cursoExiste){
        // Actualizamos la cantidad
        const curso = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad ++;
                return curso;   // retorna el curso duplicado
            }
            else{
                return curso;   // retorna los cursos no duplicados
            }
        });
        articulosCarrito = [...curso]
    }
    else{
        // Agregamos el curso al carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    
    // Agrega elementos al arreglo del carrito    
    console.log(articulosCarrito);
    carritoHTML(articulosCarrito);
}

// Mostrar el carrito de compras en el HTML
function carritoHTML(articulosCarrito){
    // Limpiar el HTML
    limpiarHTML();

    // Genera el HTML
    articulosCarrito.forEach(curso => {
        const {imagen, nombreCurso, precio, cantidad, id} = curso;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src = "${imagen}" width = "100"></td>
            <td>${nombreCurso}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        // Agregar el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

// Elimina los cursos del tbody
function limpiarHTML(){
    // Forma lenta
    // contenedorCarrito.innerHTML = "";

    // La mejor forma
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}