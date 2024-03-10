import styled from "styled-components"
import { colors } from "../../styles/colors"

export const HeaderWrapper = styled.section`
  display: flex;
  flex-flow: column;
  overflow-wrap: break-word;
  background-color: ${colors.secondary};
  --mask: linear-gradient(to top, #0000 30px, #000 0),
    radial-gradient(30px, #000 98%, #0000) bottom/55.5px 60px;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`
