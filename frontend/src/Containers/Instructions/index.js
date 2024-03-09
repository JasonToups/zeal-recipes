import React from "react"
import LinearProgress from "@material-ui/core/LinearProgress"
import { InstructionsWrapper } from "./styles"

class Instructions extends React.Component {
  render() {
    return (
      <InstructionsWrapper>
        <h3>Search for a Recipe</h3>
        <h4>From ingredients in your Pantry</h4>
      </InstructionsWrapper>
    )
  }
}

export default Instructions
