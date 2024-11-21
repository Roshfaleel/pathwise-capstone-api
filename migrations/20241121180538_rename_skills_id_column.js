/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('skills', (table) => {
      table.renameColumn('skills_id', 'skill_id'); 
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('skills', (table) => {
      table.renameColumn('skill_id', 'skills_id'); 
    });
  };