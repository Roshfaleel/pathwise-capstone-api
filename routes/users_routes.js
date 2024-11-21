import express from "express";
import * as usersController from '../controllers/users_controller.js'

const router = express.Router();

//Hit this route on "/users"
router.route("/").get(usersController.index)
.post(usersController.createUser);

//Hit this route on "/warehouses/:id"
router
  .route("/:id")
  .get(usersController.getOneUser)
  .get(usersController.getUserSkills)

router.route("/:id/skills").get(usersController.getUserSkills);
router.route("/:id/achievements").get(usersController.getUserAchievements);

export default router;