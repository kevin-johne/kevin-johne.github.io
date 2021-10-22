import styled, {css} from "styled-components"
import {colorGray75, colorOrange} from "../setting/theme";
import arrow from '../images/icons/arrow-right.svg';

export const Icon = styled.span`
    display: inline-block;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

export const CssIcon = css`
    display: inline-block;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${arrow});
`

const socialMediaColors = {
  twitter: "#00c7ff",
  soundcloud: colorOrange,
  linkedin: "#0a85ca",
  github: "purple",
}

export const SocialMediaLink = styled.a`
  display: inline-block;
  width: 40px;
  margin-right: 10px;
  background-size: cover;

  &:last-child {
    margin-right: 0;
  }

  &:hover svg path {
    transition: fill .3s ease-out;
    fill: ${props => socialMediaColors[props.socialMedia]}
  }

  svg {
    width: 100%;
    height: 100%;

    path {
      fill: ${colorGray75};
      transition: fill .3s ease-in;
    }
  }

`










