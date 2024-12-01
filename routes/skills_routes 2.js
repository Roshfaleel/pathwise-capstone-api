import * as skillsController from "../controllers/skills_controller.js";
import express from "express";

const router = express.Router();

//Hit this route on "/skills"
router.route("/")
  .get(skillsController.getAllSkills);

  export default router;
