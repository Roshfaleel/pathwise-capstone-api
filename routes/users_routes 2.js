import express from "express";
import * as usersController from "../controllers/users_controller.js";

const router = express.Router();

//Hit this route on "/users"
router.route("/").get(usersController.index).post(usersController.createUser);

//Hit this route "/email/:email"
router.get("/email/:email", usersController.getUserByEmail);

//Hit this route "/login"
router.post("/login", usersController.loginUser);

//Hit this route on "/users/:id"
router
  .route("/:id")
  .get(usersController.getOneUser)
  .get(usersController.getUserSkills);

router
  .route("/:id/skills")
  .get(usersController.getUserSkills)
  .post(usersController.addSkill);

router
  .route("/:id/achievements")
  .get(usersController.getUserAchievements)
  .post(usersController.addAchievement);

//Hit this route on users/:id/skills/:skillId
router
  .route("/:id/skills/:skillId")
  .put(usersController.updateSkill)
  .delete(usersController.deleteSkill);

//Hit this route on users/:id/skills/:achievementID
router
  .route("/:id/achievements/:achievementId")
  .put(usersController.updateAchievement)
  .delete(usersController.deleteAchievement);

  
export default router;
