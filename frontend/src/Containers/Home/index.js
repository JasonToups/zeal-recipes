import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { HomeWrapper } from "./styles"
import Input from "@material-ui/core/Input"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import LinearProgress from "@material-ui/core/LinearProgress"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import * as actions from "../../actions"

const ingredientList = ["flour", "sugar", "salt", "butter", "milk"]
const recipeNames = [
  "Classic",
  "Yellow",
  "Chocolate",
  "Frosting",
  "Coconut",
  "Bundt",
  "White",
  "Chocolate-Coconut",
  "Glaze",
  "Cream",
  "Cheese",
  "Pound",
  "German",
  "Chocolate",
  "Homemade",
  "Rum",
  "Peanut",
  "Butter",
  "Cup",
  "Overload",
  "Salted",
  "Caramel",
  "Apple",
  "Snickers",
  "Texas",
  "Sheet",
  "Ultimate",
  "Cookies",
  "Cream",
  "Oreo",
  "Cake",
  "Apple-Cinnamon",
  "Banana",
  "Berrylicious",
  "Blueberry",
  "Chocolate",
  "Chip",
  "Cornbread",
  "Honey",
  "Morning",
  "Glory",
  "Pumpkin",
  "Cream",
  "Cheese",
  "Pecan",
  "Streusel",
  "Triple",
  "Chocolate",
  "Chunk",
  "Zucchini-Chocolate",
  "Chip",
  "Muffins",
]

class Home extends Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleIngredient = this.handleIngredient.bind(this)
    this.fetchSearch = this.fetchSearch.bind(this)
    this.state = {
      term: "",
      ingredients: ["flour", "sugar", "salt", "milk"],
      inputValue: "",
    }
  }
  fetchSearch() {
    const { term, ingredients } = this.state
    // Use the searchRecipes action to fetch recipes
    this.props.searchRecipes(term, ingredients)
  }
  handleSearch(event) {
    const term = event.target.value
    this.setState({ term })
  }
  handleTermChange = (event, newValue) => {
    this.setState({ term: newValue })
  }
  handleInputValueChange = (event, newValue) => {
    this.setState({ inputValue: newValue })
  }
  handleIngredient(ingredient, event) {
    const { ingredients } = { ...this.state }
    if (event.target.checked) {
      ingredients.push(ingredient)
    } else {
      const foundIngredient = ingredients.indexOf(ingredient)
      ingredients.splice(foundIngredient, 1)
    }
    this.setState({ ingredients })
  }
  handleRecipeClick(event, id) {
    // Use the fetchRecipe action to fetch the recipe
    this.props.fetchRecipe(id)
  }

  render() {
    const { term, ingredients, inputValue } = this.state
    const { recipes, isLoading } = this.props
    return (
      <HomeWrapper>
        <Autocomplete
          value={term}
          onChange={this.handleTermChange}
          inputValue={inputValue}
          onInputChange={this.handleInputValueChange}
          options={recipeNames}
          getOptionLabel={(option) => option}
          getOptionSelected={(option, value) => option === value}
          renderInput={(params) => (
            <TextField {...params} label="Recipe Names" variant="outlined" />
          )}
        />
        <div>
          <h3>Ingredients on hand</h3>
          {ingredientList.map((ingredient) => (
            <FormControlLabel
              key={ingredient}
              control={
                <Checkbox
                  checked={ingredients.includes(ingredient)}
                  onChange={this.handleIngredient.bind(this, ingredient)}
                  value={ingredient}
                />
              }
              label={ingredient}
            />
          ))}
        </div>
        <Button onClick={this.fetchSearch}>search</Button>
        <Divider />
        {recipes && (
          <List>
            {recipes.map((recipe) => (
              <ListItem
                key={recipe.id}
                button
                onClick={(event) => this.handleRecipeClick(event, recipe.id)}
              >
                <ListItemText primary={recipe.name} />
              </ListItem>
            ))}
          </List>
        )}
        {isLoading && <LinearProgress />}
        <Divider />
        {/*
          TODO: Add a recipe component here.
          I'm expecting you to have it return null or a component based on the redux state, not passing any props from here
          I want to see how you wire up a component with connect and build actions.
        */}
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { search } = state
  return { ...search }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      searchRecipes: actions.searchRecipes,
      fetchRecipe: actions.fetchRecipe,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home)
