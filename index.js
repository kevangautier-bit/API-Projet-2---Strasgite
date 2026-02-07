import express from "express";
import cors from "cors";
import chambresRouter from "./routes/chambres.js";

const app = express();

// Middleware CORS - Autorise ton frontend React
app.use(cors({ 
  origin: ["http://localhost:5173", "http://localhost:3000"] 
}));

// Middleware pour parser le JSON (si tu veux faire du POST plus tard)
app.use(express.json());

// Utiliser le router des chambres
app.use("/api/chambres", chambresRouter);

// Route de test pour vérifier que l'API tourne
app.get("/", (req, res) => {
  res.json({ message: "API Strasgîte - Bienvenue !" });
});

// Démarrage du serveur
const port = 3310;
app.listen(port, () => {
  console.log(`🚀 API lancée sur http://localhost:${port}`);
});