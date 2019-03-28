const db = require('../data/dbConfig.js');

module.exports = {
    getRecipes,
    addRecipe
};

function getRecipes() {
    return db('recipes')
}

function addRecipe(recipe) {
    return db('recipes')
    .insert(recipe)
    .then(ids => {
        return getRecipes(ids[0]);
      });
}