## Searching for a Recipe by ID

### User Story

On the Home page, after searching for a list of recipe names, select a Recipe Name and have the recipe shown below the list.

I could split the screen and have the UI on the Left & the Recipe on the Right, this way we could use more of the screen real estate.

And then on Mobile, stack the screen where the search is on the top, and the results & recipe is on the bottom.

Before using the search function, there could be some kind of prompt to encourage searching.

### Development

#### Frontend

After searching for recipes by ingredients or a search term, the rendered list of recipe names should be clickable.

There needs to be an `onClick` function to handle clicking on a recipe name.

Then _show_ the **recipe** by _requesting_ it from the **backend**, using the `recipe ID`.

Since this is being worked on _before the Backend API is ready_, `console log` the recipe ID and place a `Todo` in the `onClick` function to **call the api**.

Remove the console log from the pull request, but confirm it's working locally.

#### Backend

I need to implement a _search_ for the **recipe** by the `recipe ID`.

I have the search working correctly and it's returning the recipe Object.
_But I'm not sure what to do next._

#### Frontend

I should _study how the initial recipe search is done_, and then use that as a **style guide** for the `single recipe fetch`.

Ok, that worked, and now I refactored the `recipe` _actions_ to be similar to the `search` _actions_.

There's the `reducers` I need to handle all of this.
There's one setup for **search**, so I should use that as a guide to setup the reducer for **recipe**.

I'm _not able to use_ the Redux Devtools for some kind of compatibility issue with this project. I looked into it, but it would take some time to set this up. I'm not sure if I want to invest the time to do that, but I'm also running into an issue where I don't know what's in the Store.

I fixed the [Redux Devtools](https://github.com/reduxjs/redux-devtools) to work with the project, I needed to add `composeEnhancers` to declaring the store at the root of the project.

Now I see my recipe is being saved in the Redux Store.

```json
recipe: {
    isLoadingRecipe: false,
    recipe: {
      _id: '65e91199a2be978237035085',
      name: 'Classic Apple Apple Bundt Snickers Pumpkin Glaze',
      instructions: 'Irure velit adipisicing mollit. Minim duis nulla laboris nostrud dolore mollit cillum. Nostrud elit laboris proident nisi ullamco laborum cupidatat. Nulla qui Lorem anim dolor reprehenderit et minim Lorem Lorem. Aliquip culpa minim ullamco mollit. Cupidatat cupidatat consequat labore Lorem sunt tempor do laboris sit reprehenderit aute. Ullamco proident aliqua id sit Lorem cillum duis do aliqua.\nCillum adipisicing dolor quis qui culpa fugiat consectetur officia ea magna dolor. Veniam magna reprehenderit Lorem fugiat consequat pariatur enim ad minim aute ad reprehenderit ad consequat. Laboris exercitation pariatur dolor pariatur fugiat veniam. Ea sint velit officia. Eiusmod ad adipisicing labore ullamco voluptate occaecat deserunt mollit. Magna ea dolor dolore quis occaecat sint reprehenderit non fugiat voluptate minim.\nLabore dolore amet occaecat dolore ex elit id occaecat dolore proident et reprehenderit. Ipsum sit excepteur fugiat culpa est in quis. Quis veniam esse excepteur aliqua fugiat. Nostrud minim nisi esse nulla non fugiat veniam voluptate ut laboris quis deserunt dolor. In est magna aute nulla nisi culpa duis officia do cupidatat in Lorem.',
      ingredients: [
        {
          _id: '65e91199a2be978237035086',
          name: 'sugar',
          unit: 'tbsp',
          amount: 0.55
        }
      ],
      __v: 0
    }
  }
```

Now I have the `recipe` being shown on the `Home` Component.

Next up is to create the `Recipe` Component.

[Creating the Recipe Component](Creating%20the%20Recipe%20Component.md)
