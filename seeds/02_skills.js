/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("skills").del();
  await knex("skills").insert([
    {
      skill_id: 1,
      user_id: 1,
      skill_name: "Leadership",
      proficiency_level: "Advanced",
    },
    {
      skill_id: 2,
      user_id: 1,
      skill_name: "Communication",
      proficiency_level: "Advanced",
    },
    {
      skill_id: 3,
      user_id: 1,
      skill_name: "Project Management",
      proficiency_level: "Intermediate",
    },
    {
      skill_id: 4,
      user_id: 1,
      skill_name: "JavaScript",
      proficiency_level: "Beginner",
    },
    {
      skill_id: 5,
      user_id: 1,
      skill_name: "HTML",
      proficiency_level: "Beginner",
    },
    {
      skill_id: 6,
      user_id: 2,
      skill_name: "Cooking",
      proficiency_level: "Advanced",
    },
    {
      skill_id: 7,
      user_id: 2,
      skill_name: "Baking",
      proficiency_level: "Intermediate",
    },
    {
      skill_id: 8,
      user_id: 2,
      skill_name: "French",
      proficiency_level: "Intermediate",
    },
    {
      skill_id: 9,
      user_id: 2,
      skill_name: "Spanish",
      proficiency_level: "Beginner",
    },
    {
      skill_id: 10,
      user_id: 3,
      skill_name: "JavaScript",
      proficiency_level: "Advanced",
    },
    {
      skill_id: 11,
      user_id: 3,
      skill_name: "React",
      proficiency_level: "Advanced",
    },
    {
      skill_id: 12,
      user_id: 3,
      skill_name: "Leadership",
      proficiency_level: "Advanced",
    },
    {
      skill_id: 13,
      user_id: 3,
      skill_name: "DevOps",
      proficiency_level: "Intermediate",
    },
    {
      skill_id: 14,
      user_id: 3,
      skill_name: "Project Management",
      proficiency_level: "Advanced",
    },
  ]);
};
