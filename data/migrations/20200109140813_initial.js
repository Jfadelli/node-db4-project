
exports.up = async function(knex) {
  await knex.schema.createTable('recipes', (tbl)=>{
    tbl.increments('id')
    tbl.string('name').notNullable()
  })

  await knex.schema.createTable('ingredients', (tbl)=>{
    tbl.increments('id')
    tbl.string('name').notNullable()
  })

  await knex.schema.createTable('instructions', (tbl)=>{
    tbl.increments('id')
    tbl.string('step').notNullable()
  })

  await knex.schema.createTable('shopping_list', (tbl)=>{
    tbl.integer('recipe_id')
    .notNullable()
    .references('id')
    .inTable('recipes')
    tbl.integer('ingredient_id')
        .notNullable()
        .references('id')
        .inTable('ingredients')
    tbl.float('qty')
        .notNullable()
    tbl.primary(['recipe_id', 'ingredient_id'])
  })

  await knex.schema.createTable('recipe_ingredients', (tbl)=>{
    tbl.integer('recipe_id')
        .notNullable()
        .references('id')
        .inTable('recipes')
      tbl.integer('ingredient_id')
        .notNullable()
        .references('id')
        .inTable('ingredients')
      tbl.integer('instruction_id')
        .notNullable()
        .references('id')
        .inTable('instructions')
      tbl.float('qty')
        .notNullable()
      tbl.primary(['recipe_id', 'ingredient_id'])
  })

  await knex.schema.createTable('recipe_instructions', (tbl)=>{
    tbl.increments('id')
    tbl.integer('instruction_id')
        .notNullable()
        .references('id')
        .inTable('instructions')
  })

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('recipe_instructions')
  await knex.schema.dropTableIfExists('recipe_ingredients')
  await knex.schema.dropTableIfExists('shopping_list')
  await knex.schema.dropTableIfExists('instructions')
  await knex.schema.dropTableIfExists('ingredients')
  await knex.schema.dropTableIfExists('recipes')
};