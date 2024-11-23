import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getAllSkills = async (req, res) => {
    try {
      const skills = await knex("skills");
  
      if (skills.length === 0) {
        return res.status(404).json({
          message: "No skills found in the database",
        });
      }
  
      res.status(200).json(skills);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Unable to retrieve skills",
      });
    }
  };

  export {getAllSkills}