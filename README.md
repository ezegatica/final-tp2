node version v18.18.0

# Endpoints

## Crear
**POST** /api/votos
```json
{
    "zona": "zona1 | zona2 | zona3 | zona4",
    "candidato": "candidatoA | candidatoB | candidatoC | candidatoD"
}
```

## Obtener todos los votos
**GET** /api/votos

## Obtener votos por zona
**GET** /api/votos/{zona1 | zona2 | zona3 | zona4}
