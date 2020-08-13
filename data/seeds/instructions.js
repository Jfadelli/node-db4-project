
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, name: 'add'},
        {id: 2, name: 'sautee'},
        {id: 3, name: 'bake'}
      ]);
    });
};
