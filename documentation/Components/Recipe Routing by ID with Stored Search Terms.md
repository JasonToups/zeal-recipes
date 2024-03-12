# Recipe Routing by ID with Stored Search Terms
## Story

Add routing so that you can land on a recipe page or reload and have the same search.

The URL should show the recipe by ID, so that we can send links directly to the recipe and it will show.

## Technical Details
Use React Router & Redux for caching the search results.
### Setup Routing
Install **React Router** as a frontend dependency.

Setup routing using `BrowserRouter` and `Route` from **React Router**.

Create a route for the recipe page that includes the recipe id as a route parameter.

```jsx
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Recipe from './Recipe';

// Inside your component
<Router>
  <Route path="/recipe/:id" component={Recipe} />
</Router>
```

### Pass the Recipe ID to the Route
In the `Recipe` Component, access the recipe id from the *route parameters* using the `useParams` *hook* from **React Router**.

```jsx
import { useParams } from 'react-router-dom';

// Inside your Recipe component
const { id } = useParams();
```


### Fetch recipe in Recipe Component
Use the recipe id to fetch the recipe from the API when the `Recipe` Component is mounted.

### Store search results in Redux Store
When you *fetch* the **search results** from the `API`, dispatch an `action` to save them in the `Redux Store`.

### Access search results in Recipe Component
In the Recipe Component, access the search results from the Redux Store using the `useSelector` hook from React Redux.

### Tidy Up
Once this has been completed, cross off the Todo in the Frontend Readme.