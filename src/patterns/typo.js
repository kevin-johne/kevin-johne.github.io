import styled from "styled-components";
import {colorBrand, colorGray20, font} from "../setting/theme";
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

export const Underline = styled.span`
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 110%;
    min-width: 70%;
    width: calc(100% - 30px);
    height: 2px;
    background-color: ${colorBrand};
    background-clip: content-box;
  }
`
