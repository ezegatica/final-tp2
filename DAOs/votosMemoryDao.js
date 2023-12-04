class VotosMemoryDao {
  constructor() {
    this.votos = new Map();
    this.votos.set("zona1", {
      candidatoA: 0,
      candidatoB: 0,
      candidatoC: 0,
      enblanco: 0
    });
    this.votos.set("zona2", {
      candidatoA: 0,
      candidatoB: 0,
      candidatoC: 0,
      enblanco: 0
    });
    this.votos.set("zona3", {
      candidatoA: 0,
      candidatoB: 0,
      candidatoC: 0,
      enblanco: 0
    });
    this.votos.set("zona4", {
      candidatoA: 0,
      candidatoB: 0,
      candidatoC: 0,
      enblanco: 0
    });
  }
  votar = async (data) => {
    try {
      // Buscamos la zona
      const zonaCandidatos = this.votos.get(data.zona)
      // Buscamos los votos del candidato en esa zona
      const candidatoZona = zonaCandidatos[data.candidato];
      // Sumamos 1 voto al candidato seleccionado
      const nuevaCantidadVotos = candidatoZona + 1;

      // Setteamos la nueva cantidad de votos la candidatos
      zonaCandidatos[data.candidato] = nuevaCantidadVotos;

      // Acutalizamos la cantiadad de votos en la zona
      this.votos.set(data.zona, zonaCandidatos);
      return;
    } catch (error) {
      throw error;
    }
  };
  getAllVotos = async () => {
    try {
      /* 
      Devolver todos los votos de todas las zonas
      El formato de respuesta será: { zonaX: { candidatoA: xx, candidatoB: yy, candidatoC: zz, enblanco: ww } }
      */
      const zonas = this.votos.keys();
      const body = {};
      for (const zona of zonas) {
        body[zona] = this.votos.get(zona);
      }
      return body;
    } catch (error) {
      throw error;
    }
  };

  getVotosByZona = async (data) => {
    try {
      const zona = this.votos.get(data.zona);
      return {
        [data.zona]: zona
      }
    } catch (error) {
      throw error;
    }
  };

}

export default VotosMemoryDao;
