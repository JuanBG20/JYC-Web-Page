// Alternar Estado Cuadro de Busqueda
const lupa = document.getElementById("btnLupa");
const cuadroBusqueda = document.querySelector(".cuadroBusqueda");
const btnMenu = document.getElementById("btnNav");
const divMenu = document.getElementById("navbarSupportedContent");

let isActive = false;

lupa.addEventListener("click", () => {
    if(!isActive) {
        cuadroBusqueda.style.display = "block"
        isActive = true;
    } else {
        cuadroBusqueda.style.display = "none";
        isActive = false;
    }

    if(!btnMenu.classList.contains("collapsed")) {
        btnMenu.classList.add("collapsed");
        divMenu.classList.remove("show");

        btnMenu.setAttribute("aria-expanded", "false");
    }
});

btnMenu.addEventListener("click", () => {
    if(isActive) {
        cuadroBusqueda.style.display = "none";

        isActive = false;
    }
});

// Borrar Contenido Cuadro de Busqueda
const cruz = document.getElementById("btnBuscador");
const inputBuscador = document.getElementById("buscador");

cruz.addEventListener("click", () => {
    inputBuscador.value = "";

    document.querySelectorAll(".producto").forEach(productos => {
        productos.style.display = "flex";
    });
});

// Filtro de Busqueda
document.addEventListener("keyup", e => {
    if(e.target.matches("#buscador")) {
        document.querySelectorAll(".producto").forEach(producto => {
            producto.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? producto.style.display = "flex" : producto.style.display = "none";
        });
    }
});