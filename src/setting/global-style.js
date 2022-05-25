import {createGlobalStyle} from "styled-components";
import {colorBrand, colorGray20, colorGray25, font} from "./theme";
import {breakpoint, breakpointsMap} from "../utils/breakpoints";
import {InlineLinkStyle} from "../patterns/link";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
        line-height: 1.5;
    }

    html, body { 
        padding: 0;
        margin: 0;
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

    a.link {
      ${InlineLinkStyle}
    }

    h2,
    h3 {
        font-family: ${font.header};
    }

    h1 {
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
