// Validaciones de dominio

/// Validacion de datos validos. Tenemos un array de zonas y candidatos, si nos pasan un dato fuera de este array tiramos error en la API.
export const zonasValidas = [
    "zona1",
    "zona2",
    "zona3",
    "zona4"
]

export const candidatosValidos = [
    "candidatoA",
    "candidatoB",
    "candidatoC",
    "enblanco"
]

export const errorZonaInvalida = 'zona no correspondiente';

export const errorCandidatoInvalido = 'candidato no válido';