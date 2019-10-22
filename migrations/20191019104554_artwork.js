
exports.up = function(knex) {
  return knex.schema.createTable('artwork', artwork => {
      artwork.increments();
      artwork.string('images')
      .notNullable();
      artwork.integer('artistID').notNullable();
      artwork.string('caption', 255)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('artwork');
};
