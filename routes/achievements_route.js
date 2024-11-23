import express from "express";
import * as achievementsController from "../controllers/achievements_controller.js"

const router = express.Router();

 //Hit this route on "/achievements"
 router.route("/")
 .get(achievementsController.getAllAchievements);

 export default router;