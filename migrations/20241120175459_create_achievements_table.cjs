/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
module.exports.up = function(knex){
  return knex.schema.createTable('achievements', function(table){
    table.increments('achievement_id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.string('achievement_name').notNullable();
    table.text('description');
    table.date('date');
    table.string('type');

    table.foreign('user_id').references('users.user_id').onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
module.exports.down = function(knex){
  return knex.schema.dropTableIfExists('achievements');
};
