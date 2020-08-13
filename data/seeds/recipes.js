
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Ham and Cheese Sandwhich'},
        {id: 2, name: 'Salmon Dinner'},
        {id: 3, name: 'Chicken Pot Pie'}
      ]);
    });
};
