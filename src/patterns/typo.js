import styled from "styled-components";
import {colorGray20, font} from "../setting/theme";
import {breakpoint, breakpointsMap} from "../utils/breakpoints";

export const Display = styled.span`
  font-family: ${font.display};
  color: ${colorGray20};
  font-weight: bold;
  font-size: 5rem;
  margin: 1.5rem 0 3rem;

  @media ${breakpoint(breakpointsMap.default, breakpointsMap.medium)} {
    font-size: 3rem;
  }
`
