const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];


cargarEventListeners();

function cargarEventListeners() {
    listaCursos.addEventListener("click", agregarCurso);
}



function agregarCurso(e) {
    if (e.target.classList.contains("agregar-carrito")) {

        const cursoSeleccionado = (e.target.parentElement.parentElement)
        leerDatosCurso(cursoSeleccionado)

    }
}

function leerDatosCurso(curso) {


    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito)
    carritoHTML();
}

function carritoHTML() {

    limpiarHTML();

    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>
            <img src="${imagen}">
        </td>
    <td> ${titulo}</td>
    <td> ${precio}</td>
    <td> ${cantidad}</td>
    <td> 
        <a href="#" class="borrar-curso" data-id="${id}">X</a>
    </td>

    `

        contenedorCarrito.appendChild(row);

    })


}

function limpiarHTML() {
    contenedorCarrito.innerHTML = "";
}