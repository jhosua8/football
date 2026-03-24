// data.js

export async function cargarEquipos() {
    const res = await fetch("../data/equipos.json");
    return await res.json();
}

export async function cargarPartidos() {
    const res = await fetch("../data/partidos.json");
    return await res.json();
}

export async function cargarTabla() {
    const res = await fetch("../data/tabla.json");
    return await res.json();
}

export const logos = {
    "Real Madrid CF": "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    "FC Barcelona": "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    "Girona FC": "https://upload.wikimedia.org/wikipedia/en/8/8f/Girona_FC_Logo.svg",
    "Atlético de Madrid": "https://upload.wikimedia.org/wikipedia/en/c/c1/Atletico_Madrid_2017_logo.svg",
    "Athletic Club": "https://upload.wikimedia.org/wikipedia/en/9/98/Club_Athletic_Bilbao_logo.svg",
    "Real Sociedad": "https://upload.wikimedia.org/wikipedia/en/f/f1/Real_Sociedad_logo.svg",
    "Real Betis Balompié": "https://upload.wikimedia.org/wikipedia/en/1/13/Real_betis_logo.svg",
    "Villarreal CF": "https://upload.wikimedia.org/wikipedia/en/7/70/Villarreal_CF_logo.svg",
    "Valencia CF": "https://upload.wikimedia.org/wikipedia/en/c/ce/Valenciacf.svg",
    "Deportivo Alavés": "https://upload.wikimedia.org/wikipedia/en/2/2e/Deportivo_Alav%C3%A9s_logo.svg",
    "CA Osasuna": "https://upload.wikimedia.org/wikipedia/en/8/8e/Osasuna_logo.svg",
    "Getafe CF": "https://upload.wikimedia.org/wikipedia/en/5/56/Getafe_logo.svg",
    "RC Celta de Vigo": "https://upload.wikimedia.org/wikipedia/en/1/14/RC_Celta_de_Vigo_logo.svg",
    "Sevilla FC": "https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg",
    "RCD Mallorca": "https://upload.wikimedia.org/wikipedia/en/6/6f/RCD_Mallorca_Logo.svg",
    "UD Las Palmas": "https://upload.wikimedia.org/wikipedia/en/1/1c/UD_Las_Palmas_logo.svg",
    "Rayo Vallecano": "https://upload.wikimedia.org/wikipedia/en/5/5e/Rayo_Vallecano_logo.svg",
    "Cádiz CF": "https://upload.wikimedia.org/wikipedia/en/6/6d/C%C3%A1diz_CF_logo.svg",
    "UD Almería": "https://upload.wikimedia.org/wikipedia/en/0/02/UD_Almer%C3%ADa_logo.svg",
    "Granada CF": "https://upload.wikimedia.org/wikipedia/en/5/56/Granada_CF_logo.svg"
};