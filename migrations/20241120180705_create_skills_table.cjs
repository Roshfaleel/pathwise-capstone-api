/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('skills', function(table){
    table.increments('skills_id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.string('skill_name').notNullable();
    table.enu('proficiency_level', ['Beginner', 'Intermediate', 'Advanced']).notNullable();
    table.foreign('user_id').references('users.user_id').onDelete('CASCADE');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Skills');
};
