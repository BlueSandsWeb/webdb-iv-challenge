exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    { name: 'garlic' },
    { name: 'onion' },
    { name: 'green onion' },
    { name: 'ginger' },
    { name: 'ground pork' },
    { name: 'beef pork' },
    { name: 'cabbage' },
    { name: 'soy sauce' },
    { name: 'ramen noodles' },
    { name: 'gyoza wrappers' },
    { name: 'sesame oil' },
    { name: 'water' },
    { name: 'chicken stock' },
    { name: 'vegtable stock' },
    { name: 'beef stock' },
    { name: 'red pepper' },
    { name: 'black pepper' },
    { name: 'butter' },
    { name: 'mirin' },
  ]);
};
