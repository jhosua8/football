import { cargarJSON } from "./data.js";
import { mostrarEquipos, mostrarTabla, mostrarPartidos } from "./ui.js";
import { filtrarEquipos, ordenarTabla, filtrarPartidos } from "./filters.js";

document.addEventListener("DOMContentLoaded", async () => {
    // EQUIPOS
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
    }

    // TABLA
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

    // PARTIDOS
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
});