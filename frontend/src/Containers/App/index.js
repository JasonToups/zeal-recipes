import * as React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware, compose } from "redux"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../Home"
import Header from "../Header"
import Recipe from "../Recipe"
import Footer from "../Footer"
import reducers from "../../reducers"
import { GlobalStyle } from "../../styles/global"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

function App() {
  return (
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
}

export default App
