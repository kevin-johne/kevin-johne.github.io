import styled, {css} from "styled-components"
import {colorBrand} from "../setting/theme";

export const Button = styled.button`
  background: none;
  cursor: pointer;
  border: none;
`

export const ButtonSmallStyle = css`
  background: none;
  cursor: pointer;
  border: none;
  position: relative;
  padding: 10px;
  width: 40px;
  height: 40px;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 2px solid ${colorBrand};
    transition: transform .2s ease-in;
    transform-origin: bottom center;
  }
`

export const ButtonSmall = styled(Button)`
  ${ButtonSmallStyle}
`
