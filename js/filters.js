// filters.js

// EQUIPOS
export function filtrarEquipos(lista, texto, region) {
    return lista.filter(eq => {
        let ok = true;

        if (texto && !eq.nombre.toLowerCase().includes(texto.toLowerCase())) ok = false;
        if (region && eq.region !== region) ok = false;

        return ok;
    });
}

// PARTIDOS
export function filtrarPartidos(lista, fecha, equipo, resultado) {
    return lista.filter(p => {
        let ok = true;

        if (fecha && p.fecha !== fecha) ok = false;

        if (equipo && !(
            p.local.nombre.toLowerCase().includes(equipo.toLowerCase()) ||
            p.visitante.nombre.toLowerCase().includes(equipo.toLowerCase())
        )) ok = false;

        if (resultado === "local" && !(p.local.goles > p.visitante.goles)) ok = false;
        if (resultado === "empate" && !(p.local.goles === p.visitante.goles)) ok = false;
        if (resultado === "visitante" && !(p.local.goles < p.visitante.goles)) ok = false;

        return ok;
    });
}

// TABLA
export function ordenarTabla(lista, campo) {
    return [...lista].sort((a, b) => b[campo] - a[campo]);
}