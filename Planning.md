DATA MODEL

-Dish
  ID (int)(PK)
  Name (varchar)

-Recipes 
  ID (int)(PK)
  Dish_ID (int)(FK)
  name (varchar)

-Recipes2Ingredients
  ID (int)(PK)
  Recipes_ID (int)(FK)
  Ingredients_ID (int)(FK)
  Ingredients_Quantity (float)
  Ingredients_Measure (varchar)

-Ingredients
  ID (int)(PK)
  name (varchar)

