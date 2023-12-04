import VotosMemoryDao from "../DAOs/votosMemoryDao.js";
import { candidatosValidos, errorCandidatoInvalido, errorZonaInvalida, zonasValidas } from "../Models/Votos.js";
class VotosApi {
  constructor() {
    this.repository = new VotosMemoryDao();
  }
  votar = async (data) => {
    try {
      // Validar si la zona existe
      const zonaEsInvalida = !zonasValidas.includes(data.zona);
      // Validar si el candidato existe
      const candidatoEsInvalido = !candidatosValidos.includes(data.candidato);

      const errors = [];
      if (zonaEsInvalida) {
        errors.push(errorZonaInvalida)
      }
      if (candidatoEsInvalido) {
        errors.push(errorCandidatoInvalido)
      }
      if (errors.length > 0) {
        throw new Error(errors.join(', '))
      }

      await this.repository.votar(data);
    } catch (error) {
      throw error;
    }
  };
  getAllVotos = async () => {
    try {
      const info = await this.repository.getAllVotos();
      return info;
    } catch (error) {
      throw error;
    }
  };
  getVotosByZona = async (data) => {
    try {
      const zonaEsInvalida = !zonasValidas.includes(data.zona);
      if (zonaEsInvalida) {
        throw new Error(errorZonaInvalida)
      }

      const info = await this.repository.getVotosByZona(data);
      return info;
    } catch (error) {
      throw error;
    }
  }
}

export default VotosApi;
