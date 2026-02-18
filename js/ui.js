export function mostrarEquipos(lista) {
    const cont = document.getElementById("listaEquipos");
    cont.innerHTML = "";

    lista.forEach(eq => {
        const div = document.createElement("div");
        div.classList.add("equipo-card");
        div.textContent = `${eq.nombre} (${eq.pais})`;
        cont.appendChild(div);
    });
}