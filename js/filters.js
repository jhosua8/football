export function filtrarEquipos(equipos, texto) {
    return equipos.filter(eq =>
        eq.nombre.toLowerCase().includes(texto.toLowerCase())
    );
}