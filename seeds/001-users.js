
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Arya', password: '1234'},
        {id: 2, username: 'Zelda', password: '2345'},
        {id: 3, username: 'Isla', password: '3456'}
      ]);
    });
};
