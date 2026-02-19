export function filtrarEquipos(equipos, texto, pais) {
    return equipos.filter(eq =>
        eq.nombre.toLowerCase().includes(texto.toLowerCase()) &&
        (pais === "" || eq.pais === pais)
    );
}

export function ordenarTabla(datos, columna) {
    return datos.sort((a, b) => {
        if (typeof a[columna] === "number") {
            return b[columna] - a[columna];
        }
        return a[columna].localeCompare(b[columna]);
    });
}

//partidos
export function filtrarPartidos(partidos, equipo) {
    return partidos.filter(p =>
        equipo === "" ||
        p.local === equipo ||
        p.visitante === equipo
    );
}