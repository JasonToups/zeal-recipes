import * as React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware, compose } from "redux"
import Home from "./Containers/Home"
import reducers from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

const container = document.getElementById("home")
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <Home />
  </Provider>
)
