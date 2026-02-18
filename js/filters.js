export function filtrarEquipos(equipos, texto, pais) {
    return equipos.filter(eq =>
        eq.nombre.toLowerCase().includes(texto.toLowerCase()) &&
        (pais === "" || eq.pais === pais)
    );
}