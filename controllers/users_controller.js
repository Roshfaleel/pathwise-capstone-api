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
        skills: userSkills.map(({ skill_name, proficiency_level }) => ({
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
      const userAchievements = await knex("achievements").where({ user_id: userId });
  
      if (userAchievements.length === 0) {
        return res.status(404).json({
          message: `No achievements found for user with ID ${userId}`,
        });
      }
  
      res.status(200).json({
        user_id: userId,
        achievements: userAchievements.map(({ achievement_name, description, date, type }) => ({
          achievement_name,
          description,
          date,
          type,
        })),
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: `Unable to retrieve achievements for user with ID ${userId}`,
      });
    }
  };
  

  export { index, getOneUser, createUser, getUserSkills, getUserAchievements};
