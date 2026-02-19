import { cargarJSON } from "./data.js";
import { mostrarEquipos } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
    if (document.getElementById("listaEquipos")) {
        const equipos = await cargarJSON("../data/equipos.json");
        mostrarEquipos(equipos);
    }
});

import { filtrarEquipos } from "./filters.js";

document.addEventListener("DOMContentLoaded", async () => {
    if (document.getElementById("listaEquipos")) {
        const equipos = await cargarJSON("../data/equipos.json");
        mostrarEquipos(equipos);

        const search = document.getElementById("search");

        search.addEventListener("input", () => {
            const filtrados = filtrarEquipos(equipos, search.value);
            mostrarEquipos(filtrados);
        });
    }
});

import { mostrarTabla } from "./ui.js";
import { ordenarTabla } from "./filters.js";

document.addEventListener("DOMContentLoaded", async () => {

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
});