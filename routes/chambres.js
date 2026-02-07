import express from "express";
import { chambres } from "../datas/chambres.js";

const router = express.Router();

// GET /api/chambres - Récupérer toutes les chambres
router.get("/", (req, res) => {
  res.json(chambres);
});

// GET /api/chambres/:id - Récupérer une chambre par ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const chambre = chambres.find(c => c.id === id);
  
  if (chambre) {
    res.json(chambre);
  } else {
    res.status(404).json({ error: "Chambre non trouvée" });
  }
});

export default router;