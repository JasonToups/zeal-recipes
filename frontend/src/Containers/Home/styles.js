import styled from "styled-components"
import breakpoint from "../../styles/breakpoints"

export const HomeWrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 2fr;
  flex-grow: 1;

  @media only screen and ${breakpoint.device.mobileS} {
    grid-template-columns: 1fr;
  }

  @media only screen and ${breakpoint.device.tablet} {
    grid-template-columns: 1fr 2fr;
  }
`
