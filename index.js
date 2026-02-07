import express from "express";
import cors from "cors";
import chambresRouter from "./routes/chambres.js";

const app = express();

// CORS - Autorise tout le monde
app.use(cors());

// Middleware JSON
app.use(express.json());

// Routes
app.use("/api/chambres", chambresRouter);

app.get("/", (req, res) => {
  res.json({ message: "API Strasgîte - Bienvenue !" });
});

// IMPORTANT : Export pour Vercel (pas de app.listen !)
export default app;