exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { name: 'Timmy Tacos', dish_id: 1 }, //1
    { name: 'Terry Tacos', dish_id: 1 }, // 2
    { name: 'Trippy Tacos', dish_id: 1 }, // 3
    { name: 'Rorys Pizza', dish_id: 2 }, // 4
    { name: 'Pepes Pizza', dish_id: 2 }, // 5
    { name: 'Sallys Pizza', dish_id: 2 }, // 6
    { name: 'Plumbys Burgers', dish_id: 3 }, // 7
    { name: 'Bossman Burgers', dish_id: 3 }, // 8
    { name: 'Brick Alley Burgers', dish_id: 3 }, // 9
  ]);
};
