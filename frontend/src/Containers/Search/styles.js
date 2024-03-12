import styled from "styled-components"
import { colors } from "../../styles/colors"

export const SearchWrapper = styled.section`
  width: 100%;
  height: 100%;
  min-width: 250px;
  display: flex;
  flex-flow: column;
  // background-image: linear-gradient(${colors.background}, ${colors.accent});
`

export const IngredientsWrapper = styled.div`
  margin-bottom: 1rem;
`

export const InputWrapper = styled.div`
  margin-bottom: 1.25rem;
`

export const ListWrapper = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-flow: column;
  overflow-wrap: break-word;
  padding: 1rem 0.75rem 3rem 0.75rem;
  margin: 10px;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  --mask: conic-gradient(
      from -45deg at bottom,
      #0000,
      #000 1deg 89deg,
      #0000 90deg
    )
    50%/60px 100%;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`
