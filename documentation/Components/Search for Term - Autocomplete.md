## Search for Term - Autocomplete

### Story

Search for recipes that include the ingredients from the checkboxes and the **search term** in the `name` of the recipe.

The _response_ should have **any recipes** that include **any of the ingredients** checked, but the recipes **must include** the _word_ entered as the **search term.**

The response is an `array` of `objects` with the `id` of the recipe & the `name` of the recipe.

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

### Technical Details

Try to use the [React Material UI Autocomplete Component](https://v4.mui.com/components/autocomplete/) for this.
Since there's a _limited amount of words_ in the array that you could choose from, this would **increase usability** for the search feature.

Here's an example from their documentation:

```js
const defaultProps = {
  options: top100Films,
  getOptionLabel: (option) => option.title,
}

const flatProps = {
  options: top100Films.map((option) => option.title),
}

;<Autocomplete
  {...defaultProps}
  id="disable-close-on-select"
  disableCloseOnSelect
  renderInput={(params) => (
    <TextField {...params} label="disableCloseOnSelect" margin="normal" />
  )}
/>
```

#### Handling Data

I'm going to need the list of recipe names from the backend to get autocomplete to work.

- [x] Create a **separate ticket** for this `backend` work, since I will need an `API` to _retrieve_ the **array of strings**.

For now I'm going to **mockup the data** & copy the list of names from the backend & put it in the `Home Component`.

#### Handling Autocomplete State

Now that I have the _Autocomplete Component showing_ with the list of words that I mocked-up, I need to **handle** the `States` for the Component.

Here's the [Material-UI Autocomplete documentation for handling the States](https://v4.mui.com/components/autocomplete/#controllable-states).

The component has two states that can be controlled:

1. the "value" state with the `value`/`onChange` props combination. This state represents the value selected by the user, for instance when pressing Enter.
2. the "input value" state with the `inputValue`/`onInputChange` props combination. This state represents the value displayed in the textbox.

```jsx
import React from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"

const options = ["Option 1", "Option 2"]

export default function ControllableStates() {
  const [value, setValue] = React.useState(options[0])
  const [inputValue, setInputValue] = React.useState("")

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue)
        }}
        id="controllable-states-demo"
        options={options}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Controllable" variant="outlined" />
        )}
      />
    </div>
  )
}
```

This worked, so I opened a pull request for the autocomplete.

The next step is to handle the **backend API** to _search for a recipe_.

[Searching for a Recipe by ID](Searching%20for%20a%20Recipe%20by%20ID.md)
