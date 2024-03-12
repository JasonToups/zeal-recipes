## Creating the Recipe Component

Since I have the recipe being shown in the Home component with some simple JSX, I'm going to pull it out of the Home Component and create a Recipe Component to render it.

### User Story

On the Home page, after searching for a `list of recipes`, and selecting one from the list, the `recipe` should appear.

On **Desktop** views, the list of recipes should appear to the Left.
And the Recipe should appear to the Right of the list.

On **Mobile**, the list of recipes should be scrollable and fixed to a certain height, and the recipe should appear below.

But we should have separate messaging when there are no available recipes for the search term.

Also we should have some **instructions** about **searching for recipes**, and **selecting a recIpe**. This will probably be handled in the `Home` Component. And there may be some work in the `search` _Actions_ & _Reducers_.

### Development

#### Frontend

This is all frontend work for this task, since the backend API is working as expected and returning a single recipe when it's requested by the recipe ID.

Pull out the JSX from the Home Component, and create the Recipe Component to export it.
The Recipe Component should accept Data as props to render all of the information.

This is the structure of the recipe `response` from the _backend_:

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

We should also handle `no recipes available` somewhere. Probably somewhere in the actions & reducers.

But we should have separate messaging when there are no available recipes for the search term.

I created the Recipe Component.

Now I need to Style it.

[Recipe Routing by ID with Stored Search Terms](./Recipe%20Routing%20by%20ID%20with%20Stored%20Search%20Terms.md)
