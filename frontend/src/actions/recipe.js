/* TODO: create recipe fetch actions, creators, and constants
  API: use /api/recipe/:id as a get request to fetch the recipe info
*/

export const FETCH_RECIPE_REQUEST = "FETCH_RECIPE_REQUEST"
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS"
export const FETCH_RECIPE_FAILURE = "FETCH_RECIPE_FAILURE"

const fetchRecipeRequest = () => {
  return {
    type: FETCH_RECIPE_REQUEST,
  }
}

const fetchRecipeSuccess = (payload) => {
  console.log("fetchRecipeSuccess: ", payload)
  return {
    type: FETCH_RECIPE_SUCCESS,
    payload,
  }
}

const fetchRecipeFailure = (error) => {
  return {
    type: FETCH_RECIPE_FAILURE,
    payload: error,
  }
}

export const fetchRecipe = (id) => {
  return async (dispatch) => {
    console.log("fetchRecipe: ", id)
    dispatch(fetchRecipeRequest())
    try {
      const response = await fetch(`/api/recipe/${id}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const recipe = await response.json()
      dispatch(fetchRecipeSuccess(recipe))
    } catch (error) {
      dispatch(fetchRecipeFailure(error.toString()))
    }
  }
}
