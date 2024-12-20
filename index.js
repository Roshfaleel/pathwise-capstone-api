import express from "express";
import "dotenv/config";
import initKnex from "knex";
import configuration from "./knexfile.js";
import cors from "cors";
import usersRoutes from "./routes/users_routes.js";
import skillsRoutes from "./routes/skills_routes.js";
import achievementsRoutes from "./routes/achievements_route.js"

const knex = initKnex(configuration);

const app = express();
app.use(cors());
app.use(express.json());

const { PORT, DB_HOST } = process.env;

app.get("/", (_req, res) => {
  res.json({ message: "Welcome! to Pathwise DB" });
});

app.use("/api/users", usersRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/achievements", achievementsRoutes);

app.listen(PORT, () => {
  console.log(knex.client.config);
  console.log(`Listening at http://${DB_HOST}:${PORT}`);
});
