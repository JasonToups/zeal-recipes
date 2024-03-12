## Fixing the Search Function to Retrieve a List of Recipes

### User Story

By _selecting_ **multiple ingredients**, _search_ for **recipes** in the `database` that include those ingredients.
Then add them to the `recipes array` in state.

### Development

#### Frontend - Search from Ingredients

I'm able to _search_ the **database**, and it returns an `array` of `objects` with the `id` of the recipe & the `name` of the recipe.

```javascript
;[
  {
    id: "65e7ce6a7b7d3ca452489552",
    name: "Homemade White Berrylicious Sheet",
  },
  {
    id: "65e7ce6a7b7d3ca4524895bb",
    name: "Cake Cream Salted Pecan",
  },
]
```

I _won't be able to get_ the **instructions** & **ingredients** for the recipe until I _fix the backend_.

I need to send the **array of objects** to the `recipes` props `searchRecipes()` action.

I had to update the `searchRecipes()` action to be an **async function** to get this to work. This was my [1st pull request](https://github.com/JasonToups/zeal-recipes/pull/6).

The recipe names are now being rendered on the Home Component.

Now I want to select a recipe name and make a request for the full recipe to be rendered

#### Frontend - Search from Term

Now I need to include the term to search for.

[Search for Term - Autocomplete](Search%20for%20Term%20-%20Autocomplete.md)
