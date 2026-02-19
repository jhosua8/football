export function filtrarEquipos(equipos, texto) {
    return equipos.filter(eq =>
        eq.nombre.toLowerCase().includes(texto.toLowerCase())
    );
}

export function ordenarTabla(datos, columna) {
    return datos.sort((a, b) => {
        if (typeof a[columna] === number) {
            return b[columna] - a[columna]; // Descendente
        }
        return a[columna].localeCompare(b[columna]); // Alfabético

    }
    );
}

export function filtrarPartidos(partidos, equipo) {
    return partidos.filter(p =>
        equipo === "" ||
        p.local === equipo ||
        p.visitante === equipo
    )
}