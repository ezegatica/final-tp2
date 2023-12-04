import { Router } from "express";
import VotosController from "../controllers/VotosController.js";
const VotosRoutes = Router();
const votosController = new VotosController();

VotosRoutes.post("/", votosController.votar);
VotosRoutes.get("/", votosController.getAllVotos)
VotosRoutes.get("/:zona", votosController.getVotosByZona)



export default VotosRoutes;
