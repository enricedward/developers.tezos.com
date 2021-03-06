import styled from "@emotion/styled"
import { breakpoints, spacings } from "../utils/variables"

const ShellWrapper = styled.div`
  max-width: ${spacings.maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding: 40px 20px 20px;
  width: 100%;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 68px 40px 40px;
  }
`

export default ShellWrapper
