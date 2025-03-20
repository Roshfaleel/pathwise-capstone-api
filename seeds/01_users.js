// Use module.exports for CommonJS syntax

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
module.exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      user_id: 1,
      email: "john.doe@gmail.com",
      password: "hashed_password_1",
      name: "John Doe",
    },
    {
      user_id: 2,
      email: "jane.smith@gmail.com",
      password: "hashed_password_2",
      name: "Jane Smith",
    },
    {
      user_id: 3,
      email: "alice.wong@gmail.com",
      password: "hashed_password_3",
      name: "Alice Wong",
    },
  ]);
};