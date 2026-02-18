import { cargarJSON } from "./data.js";
import { mostrarEquipos } from "./ui.js";
import { filtrarEquipos } from "./filters.js";

document.addEventListener("DOMContentLoaded", async () => {
    if (!document.getElementById("listaEquipos")) return;

    const equipos = await cargarJSON("../data/equipos.json");
    mostrarEquipos(equipos);

    const search = document.getElementById("search");
    const filter = document.getElementById("filter");

    function actualizar() {
        const filtrados = filtrarEquipos(equipos, search.value, filter.value);
        mostrarEquipos(filtrados);
    }

    search.addEventListener("input", actualizar);
    filter.addEventListener("change", actualizar);
});