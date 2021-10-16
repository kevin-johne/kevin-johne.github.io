import {createGlobalStyle} from "styled-components";
import {colorBrand, colorGray20, colorGray25, font} from "./theme";
import {breakpoint, breakpointsMap} from "../utils/breakpoints";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
    }

    body {
        color: ${colorGray25};
        margin: 0 auto;
        font-size: 1.6rem;
        font-family: ${font.copy};
    }

    fieldset {
        border: 0;
    }

    a {
      text-decoration: none;
    }

    h2,
    h3 {
        font-family: ${font.header};
    }

    h1,
    .display {
        font-family: ${font.display};
        color: ${colorGray20};
        font-weight: bold;
        font-size: 5rem;
        margin: 1.5rem 0 3rem;

        @media ${breakpoint(breakpointsMap.default, breakpointsMap.medium)} {
          font-size: 3rem;
        }
    }


    h2 {
        display: inline-block;
        position: relative;
        color: ${colorGray20};
        font-weight: normal;
        font-size: 2rem;
        margin: 1.5em 0 0.6em;

        &:before {
            content: '';
            position: absolute;
            top: 110%;
            width: 70%;
            height: 2px;
            background-color: ${colorBrand};
            background-clip: content-box;
        }
    }

    h3 {
        color: ${colorGray20};
        font-weight: normal;
        font-size: 1.6rem;
        margin: 1.5em 0 0.6em;
    }


    p {
        line-height: 1.5em;
        margin: 1.5em 0;
    }

    h1,
    h2,
    h3 {
        a {
            color: inherit;
        }
    }
`;
