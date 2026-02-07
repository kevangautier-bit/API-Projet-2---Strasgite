import dotenv from "dotenv";
dotenv.config();


import express from "express";
import cors from "cors";
import chambresRouter from "./routes/chambres.js";

const app = express();

// Middleware CORS - Configuration adaptative
const corsOptions = {
  origin: process.env.NODE_ENV === "production" 
    ? ["https://ton-frontend-production.vercel.app"] // Remplace par l'URL réelle quand tu déploieras le front
    : "*", // En dev : autorise tout (localhost de toute ta classe)
  credentials: true
};

app.use(cors(corsOptions));

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