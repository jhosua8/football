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