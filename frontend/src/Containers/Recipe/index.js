import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import LinearProgress from "@material-ui/core/LinearProgress"
import * as actions from "../../actions"
import { RecipeWrapper } from "./styles"

class Recipe extends React.Component {
  render() {
    const { recipe, isLoadingRecipe } = this.props // Get the recipe data from props

    return (
      <RecipeWrapper>
        <h2>Recipe</h2>
        {recipe && (
          <div key={recipe.id}>
            <h3>{recipe.name}</h3>
            <p>{recipe.instructions}</p>
            {recipe.ingredients.map((ingredient, index) => (
              <p key={ingredient.key || index}>
                {ingredient.name} - {ingredient.amount} {ingredient.unit}
              </p>
            ))}
          </div>
        )}
        {isLoadingRecipe && <LinearProgress />}
      </RecipeWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { recipe } = state
  return { ...recipe } // Pass the recipe data as props
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchRecipe: actions.fetchRecipe,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
