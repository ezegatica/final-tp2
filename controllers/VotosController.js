import VotosApi from "../Api/VotosApi.js";

class VotosController {
  constructor() {
    this.api = new VotosApi()
  }

  votar = async (req, res) => {
    try {
      const { candidato, zona } = req.body;
      if (!candidato || !zona) throw new Error("Campos requeridos (candidato o zona) vacíos");
      await this.api.votar({ candidato, zona });
      res.status(200).send({ message: "voto cargado" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
  getAllVotos = async (req, res) => {
    try {
      const info = await this.api.getAllVotos();
      res.status(200).send(info);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  getVotosByZona = async (req, res) => {
    try {
      const { zona } = req.params;
      if (!zona) throw new Error("Campos requeridos (zona) vacíos");
      const info = await this.api.getVotosByZona({ zona });
      res.status(200).send(info);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

}

export default VotosController;
