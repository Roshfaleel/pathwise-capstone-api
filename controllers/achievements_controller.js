import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getAllAchievements = async (req, res) => {
    try {
      const achievements = await knex("achievements");
  
      if (achievements.length === 0) {
        return res.status(404).json({
          message: "No achievements found in the database",
        });
      }
  
      res.status(200).json(achievements);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Unable to retrieve achievements",
      });
    }
  };

  export {getAllAchievements}