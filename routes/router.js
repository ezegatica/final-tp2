import { Router } from "express";
import VotosRoutes from "./VotosRoutes.js";
import { notFound } from "../midlewares/notFound.js";
const router = Router();

router.use("/votos", VotosRoutes)
router.use(notFound)

export default router;
