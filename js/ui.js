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

export function mostrarTabla(datos) {
    const cuerpo = document.querySelector("#tabla tbody");
    cuerpo.innerHTML = "";

    datos.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${item.equipo}</td>
            <td>${item.puntos}</td>
        `;
        cuerpo.appendChild(tr);
    });
}

export function mostrarPartidos(lista) {
    const cont = document.getElementById("listaPartidos");
    cont.innerHTML = "";

    lista.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("partidos-card");
        div.textContent = `${p.local} vs ${p.visitante} - ${p.fecha}`;
        cont.appendChild(div);
    })
}