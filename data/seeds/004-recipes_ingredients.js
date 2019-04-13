exports.seed = function(knex, Promise) {
  return knex('recipes_ingredients').insert([
    { recipe_id: 1, ingredient_id: 2 }, // 1
    { recipe_id: 1, ingredient_id: 3 }, // 2
    { recipe_id: 4, ingredient_id: 1 }, // 3
    { recipe_id: 4, ingredient_id: 2 }, // 5
    { recipe_id: 4, ingredient_id: 3 }, // 4
    { recipe_id: 7, ingredient_id: 1 }, // 6
    { recipe_id: 7, ingredient_id: 2 }, // 7
    { recipe_id: 7, ingredient_id: 3 }, // 8
  ]);
};

