import styled from "styled-components"

export const Button = styled.button`
  background: none;
  cursor: pointer;
  border: none;

  ${props => props.small`
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
      background-color: $color-gray-75;
    }

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border: 2px solid $color-brand;
      transition: transform .2s ease-in;
      transform-origin: bottom center;
    }
  `}
`
