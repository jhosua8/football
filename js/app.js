import { cargarJSON } from "./data.js";
import { mostrarEquipos, mostrarTabla, mostrarPartidos } from "./ui.js";
import { filtrarEquipos, ordenarTabla, filtrarPartidos, filtrarEquiposPorPais } from "./filters.js";

document.addEventListener("DOMContentLoaded", async () => {
    // equipos
    if (document.getElementById("listaEquipos")) {
        const equipos = await cargarJSON("../data/equipos.json");
        mostrarEquipos(equipos);

        const search = document.getElementById("search");
        if (search) {
            search.addEventListener("input", () => {
                const filtrados = filtrarEquipos(equipos, search.value);
                mostrarEquipos(filtrados);
            });
        }
        //filtro por país
        const paisFiltro = document.getElementById("filtroPais");
        if (paisFiltro) {
            paisFiltro.addEventListener("change", () => {
                const pais = paisFiltro.value;
                const filtrados = filtrarEquiposPorPais(equipos, paisFiltro.value);
                mostrarEquipos(filtrados);
            });
        }
    }

    // tabla
    if (document.getElementById("tabla")) {
        const datos = await cargarJSON("../data/tabla.json");
        mostrarTabla(datos);

        document.querySelectorAll("#tabla th").forEach(th => {
            th.addEventListener("click", () => {
                const col = th.dataset.col;
                const ordenados = ordenarTabla(datos, col);
                mostrarTabla(ordenados);
            });
        });
    }

    // partidos
    if (document.getElementById("listaPartidos")) {
        const partidos = await cargarJSON("../data/partidos.json");
        mostrarPartidos(partidos);

        const filtro = document.getElementById("filtroEquipo");
        if (filtro) {
            filtro.addEventListener("change", () => {
                const filtrados = filtrarPartidos(partidos, filtro.value);
                mostrarPartidos(filtrados);
            });
        }
    }

    // contacto
    if (document.getElementById("formContacto")) {
        const form = document.getElementById("formContacto");
        const resultado = document.getElementById("resultado");

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            if (nombre === "" || email === "" || mensaje === "") {
                resultado.textContent = "Por favor, completa todos los campos.";
                resultado.style.color = "red";
                return;
            }

            resultado.textContent = "Mensaje enviado correctamente.";
            resultado.style.color = "green";

            form.reset();
        });
    }
});