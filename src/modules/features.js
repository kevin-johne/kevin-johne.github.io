import styled from "styled-components"
import {Img} from "../patterns/img";
import {breakpoint, breakpointsMap} from "../utils/breakpoints";

export const ModFeature = styled.div`
  @media ${breakpoint(breakpointsMap.large)} {
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 0px 40px;
  }

  h1 {
    width: 100%;
    margin-bottom: 60px;
  }
`

export const Feature = styled.section`
    margin-top: 60px;
    margin-bottom: 120px;

    @media ${breakpoint(breakpointsMap.default, false)} {
        &:not(:last-child) {
           margin-bottom: 80px;
        }

        ${Img} {
          display: block;
          margin: 0 auto 20px;
          width: 60%;
       }
    }

    @media ${breakpoint(breakpointsMap.small, breakpointsMap.medium)} {
      display: flex;
      flex-wrap: wrap;
      gap: 0px 40px;

      &:not(:last-child) {
          margin-bottom: 60px;
      }

      ${Img} {
        order: 2;
        padding: 0 20px;
      }

      h2 {
        order: 1;
        margin-bottom: 20px;
        align-self: flex-end;
      }

      p {
        order: 3;
      }

      ${Img}, h2, p {
        flex: 1 1 calc(100% / 2 - 80px);
      }
    }

    @media ${breakpoint(breakpointsMap.large)} {
      flex: 1 1 calc(100% / 3 - 80px);

      ${Img} {
        width: 100%;
        margin-bottom: 20px;
      }

    }
`
