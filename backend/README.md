# backend

The back end is being hosted on http://localhost:4000/

## intro

hello, and welcome to the backend portion of the take home. please make sure to read carefully!

## docs

### /api/search

`method`: POST

`body`:

- name - the recipe name
- ingredients - array of ingredients

`response`: Array of `{id:string, name:string}`

## TODO

- [x] there's a missing api, here's the spec product has given you to implement:

### /api/recipe/:id

`method`: GET

`response`:

```js
{
  name: string,
  instructions: string,
  ingredients: string[]
}
```
