export async function cargarJSON(ruta) {
    const res = await fetch(ruta);
    return await res.json();
}