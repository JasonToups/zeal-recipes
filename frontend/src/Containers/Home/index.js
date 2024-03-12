import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { HomeWrapper } from "./styles"
import LinearProgress from "@material-ui/core/LinearProgress"
import * as actions from "../../actions"
import Search from "../Search"
import Recipe from "../Recipe"
import Instructions from "../Instructions"

class Home extends Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleIngredient = this.handleIngredient.bind(this)
    this.fetchSearch = this.fetchSearch.bind(this)
    this.fetchRecipe = this.fetchRecipe.bind(this)
    this.state = {
      term: "",
      ingredients: ["flour", "sugar", "salt", "milk"],
      inputValue: "",
      recipe: "",
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
  fetchRecipe(event, id) {
    // Use the fetchRecipe action to fetch the recipe
    this.props.fetchRecipe(id)
  }

  render() {
    const { term, ingredients, inputValue } = this.state
    const { recipes, isLoading } = this.props
    const { recipe, isLoadingRecipe } = this.props
    return (
      <HomeWrapper>
        <Search />

        {recipe && <Recipe />}
        {!recipe && !isLoadingRecipe && <Instructions />}
        {isLoadingRecipe && <LinearProgress />}
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { search, recipe } = state
  return { ...search, ...recipe }
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
