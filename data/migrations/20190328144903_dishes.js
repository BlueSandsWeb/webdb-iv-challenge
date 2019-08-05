
exports.up = function (knex) {                   // make sure you return from this!
  return knex.schema.createTable('dishes', function (tbl) {
    // primary key to configure table: called id and make it auto-increment
    tbl.increments();

    tbl.string('name', 128)
      .notNullable()
      .unique() // <type> (<column name>, <size>)
  })

    .createTable('recipes', function (tbl) {
      // primary key to configure table: called id and make it auto-increment
      tbl.increments();

      tbl.string('name')
        .notNullable()
        .unique() // <type> (<column name>, <size>)

      tbl.string('instructions')

      tbl.integer('dishes_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('dishes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })

    .createTable('ingredients', function (tbl) {
      tbl.increments();

      tbl.string('name')
        .unique()
        .notNullable()
    })

    .createTable('recipe_to_ingredients', function (tbl) {
      tbl.increments();

      tbl.integer('recipes_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

      tbl.integer('ingredients_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
};

// how to undo the changes made in the up function
exports.down = function (knex, Promise) {
  return knex.schema.dropTablesIfExists('recipe_to_ingredients').dropTablesIfExists('ingredients').dropTablesIfExists('recipes').dropTableIfExists('dishes');
};
