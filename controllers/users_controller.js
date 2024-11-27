import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

//GET all users
const index = async (req, res) => {
  try {
    const users = await knex("users");

    if (!users || users.length === 0) {
      return res.status(404).json({
        message: "No users found",
      });
    }

    res.status(200).json(users);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Unable to retrieve users data",
    });
  }
};

//get user by Email
const getUserByEmail = async (req,res) =>{
  const {email} = req.params;
  try {
    const user = await knex("users").where({ email }).first();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to retrieve user data" });
  }
}

//get one user
const getOneUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await knex("users").where({ user_id: userId }).first();
    if (!user) {
      return res.status(404).json({
        message: `User with ID ${userId} not found`,
      });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: `Unable to retrieve user data for user with ID ${userId}`,
    });
  }
};

//Get a user based on email and password 
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    const user = await knex("users").where({ email, password }).first();

    if (!user) {
      console.log("no user")
      return res.status(404).json({ message: "Invalid email or password" });
      
    }

    if (user.password !== password) {
      return res.status(404).json({ message: "Invalid email or password" });  // Handle incorrect password
    }
    console.log("User found:", user);
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Post one user
const createUser = async (req, res) => {
  const { email, password, name } = req.body;

  // Validate input
  if (!email || !password || !name) {
    return res.status(400).json({
      message: "All fields (email, password, name) are required",
    });
  }

  try {
    const [newUserId] = await knex("users").insert({
      email,
      password,
      name,
    });

    const newUser = await knex("users").where({ user_id: newUserId }).first();

    res.status(201).json({
      // message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error(error);

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        message: "Email already exists",
      });
    }

    res.status(500).json({
      message: "An error occurred while creating the user",
    });
  }
};

//get the skills of user
const getUserSkills = async (req, res) => {
  const userId = req.params.id;

  try {
    const userSkills = await knex("skills").where({ user_id: userId });

    if (userSkills.length === 0) {
      return res.status(404).json({
        message: `No skills found for user with ID ${userId}`,
      });
    }

    res.status(200).json({
      user_id: userId,
      skills: userSkills.map(({ skill_id, skill_name, proficiency_level }) => ({
        skill_id,
        skill_name,
        proficiency_level,
      })),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: `Unable to retrieve skills for user with ID ${userId}`,
    });
  }
};

//get achievements of the user
const getUserAchievements = async (req, res) => {
  const userId = req.params.id;

  try {
    const userAchievements = await knex("achievements").where({
      user_id: userId,
    });

    if (userAchievements.length === 0) {
      return res.status(404).json({
        message: `No achievements found for user with ID ${userId}`,
      });
    }

    res.status(200).json({
      user_id: userId,
      achievements: userAchievements.map(
        ({ achievement_id,achievement_name, description, date, type }) => ({
          achievement_id,
          achievement_name,
          description,
          date,
          type,
        })
      ),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: `Unable to retrieve achievements for user with ID ${userId}`,
    });
  }
};

//POST a skill
const addSkill = async (req, res) => {
  const userId = req.params.id;
  const { skill_name, proficiency_level } = req.body;

  try {
    const newSkill = await knex("skills").insert({
      user_id: userId,
      skill_name,
      proficiency_level,
    });
    res.status(201).json({
      message: "Skill added successfully",
      skill_id: newSkill[0],
    });
  } catch (error) {
    console.error(error);
    res.ststus(500).json({
      message: "unable to add skill",
    });
  }
};

//Update a skill -PUT API
const updateSkill = async (req, res) => {
  const userId = req.params.id;
  const { skill_name, proficiency_level } = req.body;

  try {
    const updatedRows = await knex("skills")
      .where({ user_id: userId, skill_id: skillId })
      .update({ skill_name, proficiency_level });

    if (updatedRows === 0) {
      return res.status(404).json({
        message: `Skill with ID ${skillId} for user ${userId} not found`,
      });
    }
    res.status(200).json({
      message: "Skill updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Unable to update skill",
    });
  }
};

//DELETE a skill
const deleteSkill = async (req, res) => {
  const { id: userId, skillId } = req.params;

  try {
    const deletedRows = await knex("skills")
      .where({ user_id: userId, skill_id: skillId })
      .del();

    if (deletedRows === 0) {
      return res.status(404).json({
        message: `Skill with ID ${skillId} for user ${userId} not found`,
      });
    }

    res.status(200).json({
      message: "Skill deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Unable to delete skill",
    });
  }
};

//Add a new Achievement
const addAchievement = async (req, res) => {
  const userId = req.params.id;
  const { achievement_name, description, date, type } = req.body;

  try {
    const newAchievement = await knex("achievements").insert({
      user_id: userId,
      achievement_name,
      description,
      date,
      type,
    });

    res.status(201).json({
      message: "Achievement added successfully",
      achievement_id: newAchievement[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Unable to add achievement",
    });
  }
};

//update an achievement
const updateAchievement = async (req, res) => {
  const { id: userId, achievementId } = req.params;
  const { achievement_name, description, date, type } = req.body;

  try {
    const updatedRows = await knex("achievements")
      .where({ user_id: userId, achievement_id: achievementId })
      .update({ achievement_name, description, date, type });

    if (updatedRows === 0) {
      return res.status(404).json({
        message: `Achievement with ID ${achievementId} for user ${userId} not found`,
      });
    }

    res.status(200).json({
      message: "Achievement updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Unable to update achievement",
    });
  }
};

const deleteAchievement = async (req, res) => {
  const { id: userId, achievementId } = req.params;

  try {
    const deletedRows = await knex("achievements")
      .where({ user_id: userId, achievement_id: achievementId })
      .del();

    if (deletedRows === 0) {
      return res.status(404).json({
        message: `Achievement with ID ${achievementId} for user ${userId} not found`,
      });
    }

    res.status(200).json({
      message: "Achievement deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Unable to delete achievement",
    });
  }
};

export {
  index,
  getOneUser,
  createUser,
  getUserByEmail,
  loginUser,
  getUserSkills,
  getUserAchievements,
  addSkill,
  updateSkill,
  deleteSkill,
  addAchievement,
  updateAchievement,
  deleteAchievement
};
