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

// Au lieu de app.listen(), on exporte pour Vercel
export default app;

// Pour le développement local uniquement
if (process.env.NODE_ENV !== 'production') {
  const port = 3310;
  app.listen(port, () => {
    console.log(`🚀 API lancée sur http://localhost:${port}`);
  });
}