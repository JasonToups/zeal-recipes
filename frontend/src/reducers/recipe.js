import {
  FETCH_RECIPE_REQUEST,
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPE_FAILURE,
} from "../actions"

const initialState = {
  recipe: null,
  isLoadingRecipe: false,
  error: null,
}

const recipeFetching = (state) => {
  return { ...state, isLoadingRecipe: true }
}

const recipeFetched = (state, payload) => {
  return { ...state, isLoadingRecipe: false, recipe: payload }
}

const recipeFailed = (state, payload) => {
  return { ...state, isLoadingRecipe: false, error: payload }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_RECIPE_REQUEST:
      return recipeFetching()
    case FETCH_RECIPE_SUCCESS:
      return recipeFetched(state, payload)
    case FETCH_RECIPE_FAILURE:
      return recipeFailed(state, payload)
    default:
      return state
  }
}
