
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      users.increments();

      users
      .string('username', 32)
      .notNullable()
      .unique();
      users.string('password', 27).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
