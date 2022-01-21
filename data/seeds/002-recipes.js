exports.see = function(knex, Promise){
    return knex('recipes').insert([
        {recipe_name: 'Spinach Dip', created_at: '2022-01-20 07:56'},
        {recipe_name: 'Pasta', created_at: '2022-01-20 07:56'}
    ])
}