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

//partidos
import { mostrarPartidos } from "./ui.js";
import { filtrarPartidos } from "./filters.js";

document.addEventListener("DOMContentLoaded", async () => {

    // PARTIDOS
    if (document.getElementById("listaPartidos")) {
        const partidos = await cargarJSON("../data/partidos.json");
        mostrarPartidos(partidos);

        const filtro = document.getElementById("filtroEquipo");
        filtro.addEventListener("change", () => {
            const filtrados = filtrarPartidos(partidos, filtro.value);
            mostrarPartidos(filtrados);
        });
    }
});

//contacto
document.addEventListener("DOMContentLoaded", () => {

    // CONTACTO
    const form = document.getElementById("form");
    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();
            const res = document.getElementById("resultado");

            if (nombre === "" || email === "" || mensaje.length < 5) {
                res.textContent = "Completa todos los campos correctamente.";
                res.style.color = "red";
            } else {
                res.textContent = "Formulario enviado correctamente.";
                res.style.color = "green";
            }
        });
    }
});