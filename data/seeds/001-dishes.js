
exports.seed = function(knex, Promise) {

      return knex('dishes').insert([
        { name: 'Tacos'},
        { name: 'Pizza'},
        { name: 'Burgers'}
      ]);
};
