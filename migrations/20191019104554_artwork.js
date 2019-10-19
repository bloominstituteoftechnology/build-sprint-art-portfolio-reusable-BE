
exports.up = function(knex) {
  return knex.schema.createTable('artwork', artwork => {
      artwork.increments();
      artwork.string('images')
      .notNullable();
      artwork.integer('artistID').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('artwork');
};
