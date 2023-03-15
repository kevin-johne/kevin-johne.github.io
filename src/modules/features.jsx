import styled from "styled-components";
import { breakpoint, breakpointsMap } from "../utils/breakpoints";

export const ModFeature = styled.div`
  @media ${breakpoint(breakpointsMap.large)} {
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 0px 40px;
  }

  margin-bottom: 120px;

  h1 {
    width: 100%;
    margin-bottom: 60px;
  }
`;

export const Feature = styled.section`
  margin-bottom: 20px;

  h2 {
    display: inline-block;
  }

  @media ${breakpoint(breakpointsMap.default, false)} {
    &:not(:last-child) {
      margin-bottom: 80px;
    }

    > :first-child {
      margin: 0 auto 20px;
      width: 60%;
    }

    > svg:first-child, > img:first-child {
      display: block;
    }
  }

  @media ${breakpoint(breakpointsMap.small)} {
    display: grid;
    grid-template-columns: 1.5fr 1fr;

    grid-gap: 0 20px;

    > :first-child {
      grid-column: 2;
      grid-row: 1 / span 10;
      width: 100%;
      margin-bottom: 20px;
      padding: 0 20px;
    }

    ${(props) =>
      !!props.reverse &&
      `
        grid-template-columns: 1fr 1.5fr;
        > :first-child {
          grid-column: 1;
        }
      `}
  }

  @media ${breakpoint(breakpointsMap.medium)} {
    margin-bottom: 60px;
  }
`;
