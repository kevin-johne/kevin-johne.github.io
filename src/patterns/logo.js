import React from 'react'
import styled, {keyframes} from 'styled-components'
import {colorBrand, colorGray20} from "../setting/theme";

const Flash = styled.line`
    stroke: ${colorBrand};
    stroke-width: 0;
    transition: all 0.3s cubic-bezier(.68, .23, .92, .48);
`

const Svg = styled.svg`
  &:hover ${Flash} {
    stroke: ${colorGray20};
    stroke-width: 100%;
  }
`

const draw = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`

const colorShift = keyframes`
  0% {
      stroke: ${colorBrand};
  }
  100% {
      stroke: ${colorGray20};
  }
`
const Letter = styled.line`
    stroke: ${colorGray20};
    stroke-width: 2px;
    animation-timing-function: cubic-bezier(.68, .23, .92, .48);
    animation-fill-mode: forwards;
    animation-name: ${draw}, ${colorShift};
`

const ThickLetter = styled(Letter)`
  stroke-width: 7px;
`

const FirstAnimation = styled(ThickLetter)`
  stroke-dashoffset: 60;
  stroke-dasharray: 60;
  animation-duration: 1s;
`

const SecondAnimation = styled(Letter)`
  animation-duration: .2s;
  animation-delay: 1s;
  stroke-dashoffset: 22.98;
  stroke-dasharray: 22.98;
`

const ThirdAnimation = styled(Letter)`
  animation-duration: .2s;
  animation-delay: 1s;
  stroke-dashoffset: 21;
  stroke-dasharray: 21;
`

const FourthAnimation = styled(Letter)`
  animation-duration: .2s;
  animation-delay: 1s;
  stroke-dashoffset: 9;
  stroke-dasharray: 9;
`

const Logo = () => (
  <Svg version="1.1" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 100 100">
    <g>
      <Flash x1="50" y1="49" x2="50" y2="51"/>
      <g id="square" transform="rotate(45 50 50)">
        <FirstAnimation x1="31.459" y1="20" x2="31.459" y2="80"/>
        <SecondAnimation x1="31.459" y1="79" x2="54.379" y2="79"/>
        <FirstAnimation x1="68.542" y1="80" x2="68.542" y2="20"/>
        <SecondAnimation x1="68.542" y1="21" x2="45.622" y2="21"/>
      </g>
      <ThirdAnimation x1="14" y1="56" x2="14" y2="35"/>
      <FourthAnimation x1="14" y1="56" x2="14" y2="65"/>
    </g>
  </Svg>
)

export default Logo;
