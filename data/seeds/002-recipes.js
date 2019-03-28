

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    { name: 'pork ramen', dishes_id: 1, instructions: "Cook garlic, ginger and oil.  Add soy sauce and mirin, boild for 2min. Add stock and boil for 15 min." },
    { name: 'beef ramen', dishes_id: 1, instructions: "Cook garlic, ginger and oil.  Add soy sauce and mirin, boild for 2min. Add stock and boil for 15 min." },
    { name: 'spicy ramen', dishes_id: 1, instructions: "Cook garlic, ginger and oil.  Add soy sauce and mirin, boild for 2min. Add stock and boil for 15 min." },
    { name: 'hibachi steak', dishes_id: 2, instructions: "cook meat, add mirin when almost done" },
    { name: 'hibachi chicken', dishes_id: 2, instructions: "cook meat, add mirin when almost done" },
    { name: 'vegtable gyoza', dishes_id: 3, instructions: "mix coarsely chopped veg, stuff into gyoza wrapper. Seal wrapper with water. Fry for 10min" },
    { name: 'steamed pork gyoza', dishes_id: 3, instructions: "mix ground pork with chopped cabbage, stuff into gyoza wrapper. Seal wrapper with water. Steam for 10min" },
    { name: 'fried port gyoza', dishes_id: 3, instructions: "mix ground pork with chopped cabbage, stuff into gyoza wrapper. Seal wrapper with water. Fry for 10min" }
  ]);
};

