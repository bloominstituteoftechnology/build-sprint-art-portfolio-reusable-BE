
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Arya', password: '1234'},
        {username: 'Zelda', password: '2345'},
        {username: 'Isla', password: '3456'}
      ]);
    });
};
