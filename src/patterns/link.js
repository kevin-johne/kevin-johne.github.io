import {Link as GatsbyLink} from "gatsby";
import {colorBrand, colorGray20, colorGray75, colorOrange, colorTwitter, colorWhite, font} from "../setting/theme";
import styled, {css} from "styled-components";

const border = "2px";
const timeFuncEaseIn = "cubic-bezier(0.7, 0, 0.3, 1)";

export const InlineLinkStyle = css`
color: ${colorGray20};
  font-weight: bold;
  position: relative;
  z-index: 1;
  text-shadow: -${border} ${border} ${colorWhite},
               0 ${border} ${colorWhite},
               ${border} ${border} ${colorWhite};
  white-space: nowrap;

  &:visited {
      color: ${colorGray20};
  }

  &:hover {
      color: ${colorGray20};
  }

  &:after {
      content: '';
      position: absolute;
      z-index: -1;
      left: 0;
      bottom: -.1em;
      width: 100%;
      height: .1em;
      background-color: ${colorBrand};
      transition-duration: .2s;
      transition-property: width;
      transition-timing-function: ease-out;
      pointer-events: none;
  }

  &:hover:after {
      width: 30%;
      transition-timing-function: ease-in;
  }
`
export const InlineLink = styled(GatsbyLink)`
  ${InlineLinkStyle}
`;

const Cta = styled(InlineLink)`
  display: inline-block;
    position: relative;
    text-decoration: none;
    overflow: hidden;
    color: ${colorGray75};
    font-family: ${font.copy};

    &:after {
        content: '';
        position: absolute;
        height: 20px;
        width: 100%;
        top: 50%;
        margin-top: -13px;
        right: 0;
        transform: translateX(-110%);
        transition-property: transform;
        transition-duration: 0.3s;
        transition-timing-function: ${timeFuncEaseIn};
        background: ${colorOrange};
    }

    &:hover:after {
        transform: translateX(110%);
    }

    &:before {
        content: attr(data-text);
        position: absolute;
        z-index: 2;
        width: 0;
        font-family: ${font.copy};
        overflow: hidden;
        white-space: nowrap;
        transition-property: width;
        transition-duration: 0.4s;
        transition-timing-function: ${timeFuncEaseIn};
        color: ${colorOrange};
    }

    &:hover:before {
        width: 100%;
    }
`;

export const CTASmall = styled(Cta)`
  font-size: 1em;
  margin-bottom:  -6px;
`;

export const CTABig = styled(Cta)`
  font-size: 4em;

  &:before {
    transition-property: width;
  }

  //buggie in chrome
  &:after {
    content: none;
  }
`;

const brandColors = {
  lisaHantke: '#177b15',
  twitter: colorTwitter,
  soundcloud: colorOrange,
  zwilling: '#f01114',
  carolus: '#a30024',
  gedore: '#004c95',
  gedoreShop: '#2484e3',
  jacques: '#af1e2d',
  baraka: '#0017ff',
  condor: '#f8ac00'
}

export const BrandedCTA = styled(Cta)`
  &:after {

    background-color: ${props => brandColors[props.brand] || colorBrand};
  }

  &:before {
    color: ${props => brandColors[props.brand] || colorBrand};
  }
`;
