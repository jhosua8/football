// app.js

import { cargarEquipos, cargarPartidos, cargarTabla } from "./data.js";
import { mostrarEquipos, mostrarPartidos, mostrarTabla } from "./ui.js";
import { filtrarEquipos, filtrarPartidos, ordenarTabla } from "./filters.js";

// Detectar página
const pagina = document.body.dataset.page;

// EQUIPOS
if (pagina === "equipos") {
    cargarEquipos().then(equipos => {
        mostrarEquipos(equipos);

        document.getElementById("buscar-equipo").addEventListener("input", () => {
            const texto = document.getElementById("buscar-equipo").value;
            const region = document.getElementById("filtro-region").value;

            const filtrados = filtrarEquipos(equipos, texto, region);
            mostrarEquipos(filtrados);
        });

        document.getElementById("filtro-region").addEventListener("change", () => {
            const texto = document.getElementById("buscar-equipo").value;
            const region = document.getElementById("filtro-region").value;

            const filtrados = filtrarEquipos(equipos, texto, region);
            mostrarEquipos(filtrados);
        });
    });
}

// PARTIDOS
if (pagina === "partidos") {
    cargarPartidos().then(partidos => {
        mostrarPartidos(partidos);

        document.getElementById("filtro-fecha").addEventListener("change", () => {
            aplicarFiltrosPartidos(partidos);
        });

        document.getElementById("filtro-equipo").addEventListener("input", () => {
            aplicarFiltrosPartidos(partidos);
        });

        document.getElementById("filtro-resultado").addEventListener("change", () => {
            aplicarFiltrosPartidos(partidos);
        });
    });
}

function aplicarFiltrosPartidos(partidos) {
    const fecha = document.getElementById("filtro-fecha").value;
    const equipo = document.getElementById("filtro-equipo").value;
    const resultado = document.getElementById("filtro-resultado").value;

    const filtrados = filtrarPartidos(partidos, fecha, equipo, resultado);
    mostrarPartidos(filtrados);
}

// TABLA
if (pagina === "tabla") {
    cargarTabla().then(tabla => {
        mostrarTabla(tabla);

        document.querySelectorAll(".orden-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const campo = btn.dataset.campo;
                const ordenado = ordenarTabla(tabla, campo);
                mostrarTabla(ordenado);
            });
        });
    });
}

// PAGINACIÓN
let paginaActual = 1;
const equiposPorPagina = 8;

function mostrarPagina(lista) {
    const inicio = (paginaActual - 1) * equiposPorPagina;
    const fin = inicio + equiposPorPagina;
    const pagina = lista.slice(inicio, fin);

    mostrarEquipos(pagina);
    generarBotonesPaginacion(lista.length);
}

function generarBotonesPaginacion(total) {
    const cont = document.querySelector(".paginacion");
    cont.innerHTML = "";

    const totalPaginas = Math.ceil(total / equiposPorPagina);

    for (let i = 1; i <= totalPaginas; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;

        if (i === paginaActual) {
            btn.style.background = "#e62b2f";
        }

        btn.addEventListener("click", () => {
            paginaActual = i;
            aplicarFiltrosEquipos();
        });

        cont.appendChild(btn);
    }
}

// FILTROS AVANZADOS
function aplicarFiltrosEquipos() {
    const texto = document.getElementById("buscar-equipo").value;
    const region = document.getElementById("filtro-region").value;
    const letra = document.getElementById("filtro-letra").value;

    let filtrados = filtrarEquipos(equipos, texto, region);

    if (letra) {
        filtrados = filtrados.filter(eq => eq.nombre.startsWith(letra));
    }

    mostrarPagina(filtrados);
}