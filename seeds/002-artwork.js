
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('artwork').del()
    .then(function () {
      // Inserts seed entries
      return knex('artwork').insert([
        {id: 1, images: 'mr-tt-xb0wLfZH9Zo-unsplash.jpg', artistID: 1, caption: "null"},
        {id: 2, images: 'alexander-schimmeck-ineC_oi7NHs-unsplash.jpg', artistID: 2, caption: "null"},
        {id: 3, images: 'pavel-nekoranec-8ALBNshSZTE-unsplash.jpg', artistID: 3, caption: "null"}
      ]);
    });
};
