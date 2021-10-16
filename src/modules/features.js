import styled from "styled-components"
import {Img} from "../patterns/img";
import {breakpoint, breakpointsMap} from "../utils/breakpoints";

export const ModFeature = styled.div`


  @media ${breakpoint(breakpointsMap.large)} {
    margin-top: 60px;
    margin-bottom: 120px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
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
       }
    }

    @media ${breakpoint(breakpointsMap.small, breakpointsMap.medium)} {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;

      &:not(:last-child) {
          margin-bottom: 60px;
      }

      ${Img} {
        order: 2;
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

// @include breakpoint($size: small, $inherit: medium) {
//     .mod-features {
//
//         .feature {
//             display: flex;
//             flex-wrap: wrap;
//
//             &:not(:last-child) {
//                 margin-bottom: 60px;
//             }
//         }
//
//         img {
//             @include push(0.5);
//             width: span(2);
//             margin-right: gutter();
//             order: 2;
//         }
//
//         h2 {
//             order: 1;
//             width: span(3);
//             margin-right: gutter();
//             margin-bottom: 20px;
//             align-self: flex-end;
//         }
//
//         p {
//             order: 3;
//             width: span(3);
//             margin-right: gutter();
//
//             &:nth-of-type(2) {
//                 margin-right: 0;
//             }
//         }
//     }
// }
//
// @include breakpoint($size: default, $inherit: false) {
//     .mod-features {
//         .feature {
//             &:not(:last-child) {
//                 margin-bottom: 80px;
//             }
//         }
//
//         img {
//             display: block;
//             margin: 0 auto 20px;
//             width: span(4);
//         }
//     }
// }
