import styled from "styled-components"
import {breakpoint, breakpointsMap} from "../utils/breakpoints";

export const Content = styled.div`
    width: 100%;
    margin: 60px auto;

    @media ${breakpoint(breakpointsMap.default, breakpointsMap.medium)} {
      margin: 30px auto;
    }
`

export const Column = styled.div`
  column-count: ${props => props.columns || 2};
  column-gap: 50px;

  margin-top: 1.5em;
  margin-bottom: 1.5em;

  width: ${props => props.width || '100%'};

  p:first-of-type {
      margin-top: 0;
  }

  @media ${breakpoint(breakpointsMap.default, breakpointsMap.medium)} {
      column-count: 1;
  }
`
