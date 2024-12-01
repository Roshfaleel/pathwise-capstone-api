/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("achievements").del();
  await knex("achievements").insert([
    {
      achievement_id: 1,
      user_id: 1,
      achievement_name: "Managed Product Launch",
      description: "Successfully managed a product launch",
      date: "2024-01-15",
      type: "Project",
    },
    {
      achievement_id: 2,
      user_id: 1,
      achievement_name: "Team Lead of the Year",
      description: "Recognized for outstanding leadership",
      date: "2024-02-10",
      type: "Award",
    },
    {
      achievement_id: 3,
      user_id: 1,
      achievement_name: "Completed Basic JavaScript",
      description: "Completed an introductory JavaScript course",
      date: "2024-03-01",
      type: "Course",
    },
    {
      achievement_id: 4,
      user_id: 2,
      achievement_name: "Master Chef Competition",
      description: "Placed in top 3 of a regional competition",
      date: "2024-04-20",
      type: "Award",
    },
    {
      achievement_id: 5,
      user_id: 2,
      achievement_name: "French Proficiency Exam",
      description: "Passed intermediate-level French exam",
      date: "2024-05-15",
      type: "Certification",
    },
    {
      achievement_id: 6,
      user_id: 2,
      achievement_name: "Baking Workshop Completion",
      description: "Completed an intermediate baking workshop",
      date: "2024-06-10",
      type: "Course",
    },
    {
      achievement_id: 7,
      user_id: 3,
      achievement_name: "React Bootcamp",
      description: "Completed an advanced React bootcamp",
      date: "2024-07-01",
      type: "Course",
    },
    {
      achievement_id: 8,
      user_id: 3,
      achievement_name: "DevOps Certification",
      description: "Earned a certification in DevOps practices",
      date: "2024-08-15",
      type: "Certification",
    },
    {
      achievement_id: 9,
      user_id: 3,
      achievement_name: "Project Leadership Award",
      description: "Recognized for leading a high-profile project",
      date: "2024-09-10",
      type: "Award",
    },
  ]);
};
