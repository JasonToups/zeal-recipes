import * as React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware, compose } from "redux"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Containers/Home"
import Header from "./Containers/Header"
import Recipe from "./Containers/Recipe"
import Footer from "./Containers/Footer"
import reducers from "./reducers"
import { GlobalStyle } from "./styles/global"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

const container = document.getElementById("home")
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </Router>
    <Footer />
  </Provider>
)
