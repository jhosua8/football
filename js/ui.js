// ui.js

// EQUIPOS
export function mostrarEquipos(lista) {
    const cont = document.getElementById("lista-equipos");
    cont.innerHTML = "";

    lista.forEach(eq => {
        cont.innerHTML += `
            <div class="equipo-card">
                <img src="${eq.escudo}" alt="${eq.nombre}">
                <h3>${eq.nombre}</h3>
                <p>${eq.region}</p>
            </div>
        `;
    });
}

// PARTIDOS
export function mostrarPartidos(lista) {
    const cont = document.getElementById("lista-partidos");
    cont.innerHTML = "";

    lista.forEach(p => {
        cont.innerHTML += `
            <div class="partido-card">
                <h3>${p.local.nombre} ${p.local.goles} - ${p.visitante.goles} ${p.visitante.nombre}</h3>
                <p><strong>Fecha:</strong> ${p.fecha} ${p.hora}</p>
                <p><strong>Estadio:</strong> ${p.estadio}</p>
                <p><strong>Árbitro:</strong> ${p.arbitro}</p>
            </div>
        `;
    });
}

// TABLA
export function mostrarTabla(lista) {
    const tbody = document.querySelector("#tabla-laliga tbody");
    tbody.innerHTML = "";

    lista.forEach(e => {
        tbody.innerHTML += `
            <tr>
                <td>${e.pos}</td>
                <td>${e.equipo}</td>
                <td>${e.puntos}</td>
                <td>${e.pj}</td>
                <td>${e.pg}</td>
                <td>${e.pe}</td>
                <td>${e.pp}</td>
                <td>${e.gf}</td>
                <td>${e.gc}</td>
                <td>${e.dg}</td>
            </tr>
        `;
    });
}

import { logos } from "./data.js";

export function mostrarPartidos(lista) {
    const cont = document.getElementById("lista-partidos");
    cont.innerHTML = "";

    lista.forEach(p => {
        const logoLocal = logos[p.local.nombre] || "";
        const logoVisitante = logos[p.visitante.nombre] || "";

        cont.innerHTML += `
            <div class="partido-card">

                <div class="partido-equipos">
                    <img src="${logoLocal}">
                    <h3>${p.local.goles} - ${p.visitante.goles}</h3>
                    <img src="${logoVisitante}">
                </div>

                <div class="partido-stats">
                    <p><strong>${p.local.nombre}</strong> vs <strong>${p.visitante.nombre}</strong></p>
                    <p><strong>Fecha:</strong> ${p.fecha} ${p.hora}</p>
                    <p><strong>Estadio:</strong> ${p.estadio}</p>
                    <p><strong>Árbitro:</strong> ${p.arbitro}</p>

                    <hr>

                    <p><strong>Posesión:</strong> ${p.stats?.posesion_local || 0}% - ${p.stats?.posesion_visitante || 0}%</p>
                    <p><strong>Tiros:</strong> ${p.stats?.tiros_local || 0} - ${p.stats?.tiros_visitante || 0}</p>
                    <p><strong>Córners:</strong> ${p.stats?.corners_local || 0} - ${p.stats?.corners_visitante || 0}</p>
                </div>

            </div>
        `;
    });
}

import { logos } from "./data.js";

export function mostrarPartidos(lista) {
    const cont = document.getElementById("lista-partidos");
    cont.innerHTML = "";

    lista.forEach((p, index) => {
        const logoLocal = logos[p.local.nombre] || "";
        const logoVisitante = logos[p.visitante.nombre] || "";

        cont.innerHTML += `
            <div class="partido-card" data-id="${index}">
                <div class="partido-equipos">
                    <img src="${logoLocal}">
                    <h3>${p.local.goles} - ${p.visitante.goles}</h3>
                    <img src="${logoVisitante}">
                </div>
                <p><strong>${p.local.nombre}</strong> vs <strong>${p.visitante.nombre}</strong></p>
                <p>${p.fecha} ${p.hora}</p>
            </div>
        `;
    });

    // EVENTO PARA ABRIR MODAL
    document.querySelectorAll(".partido-card").forEach(card => {
        card.addEventListener("click", () => {
            const id = card.dataset.id;
            abrirModal(lista[id]);
        });
    });
}

export function abrirModal(partido) {
    const modal = document.getElementById("modal-partido");
    const detalle = document.getElementById("modal-detalle");

    const logoLocal = logos[partido.local.nombre] || "";
    const logoVisitante = logos[partido.visitante.nombre] || "";

    detalle.innerHTML = `
        <h2>${partido.local.nombre} vs ${partido.visitante.nombre}</h2>
        <div style="display:flex; justify-content:space-around; margin:20px 0;">
            <img src="${logoLocal}" width="80">
            <h1>${partido.local.goles} - ${partido.visitante.goles}</h1>
            <img src="${logoVisitante}" width="80">
        </div>

        <p><strong>Estadio:</strong> ${partido.estadio}</p>
        <p><strong>Árbitro:</strong> ${partido.arbitro}</p>

        <hr>

        <h3>Estadísticas</h3>
        <p><strong>Posesión:</strong> ${partido.stats?.posesion_local || 0}% - ${partido.stats?.posesion_visitante || 0}%</p>
        <p><strong>Tiros:</strong> ${partido.stats?.tiros_local || 0} - ${partido.stats?.tiros_visitante || 0}</p>
        <p><strong>Córners:</strong> ${partido.stats?.corners_local || 0} - ${partido.stats?.corners_visitante || 0}</p>
    `;

    modal.style.display = "flex";

    document.getElementById("cerrar-modal").onclick = () => modal.style.display = "none";
}