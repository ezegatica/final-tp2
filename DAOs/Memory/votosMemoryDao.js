class votosMemoryDao {
  constructor() {
    this.votos = new Map({
      "zona1": 0,
      "zona2": 0,
      "zona3": 0,
      "zona4": 0
    });
  }
  createDao = async (data) => {
    try {
      // Validar si la zona existe (haerlo en el model de Votos, con un array de zonas validas)
      // Validar si el candidato existe (same arriba)
      this.votos.set(data.zona,)
      return await data;
    } catch (error) {
      return error;
    }
  };
  getAllDao = async () => {
    try {
      const data = this.x.join(" ");
      return data;
    } catch (error) {
      return error;
    }
  };

}

export default votosMemoryDao;
