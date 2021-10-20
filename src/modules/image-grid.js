import React from "react";
import styled from "styled-components";
import {Img} from "../patterns/img";
import {StaticImage} from "gatsby-plugin-image";
import {colorBrand} from "../setting/theme";
import {breakpoint, breakpointsMap} from "../utils/breakpoints";
import {Link} from "gatsby";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 120px;
    background-color: ${colorBrand};
    padding: 2px 0;

    @media ${breakpoint(breakpointsMap.default, breakpointsMap.medium)} {
      margin-bottom: 60px;
    }
`

const GridCell = styled(Link)`
    position: relative;
    width: 25%;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.src});
    perspective: 900px;
    margin-bottom: 8px;
    transition: filter 850ms cubic-bezier(0.250, 0.460, 0.450, 0.940);

    img {
        width: 100%;
        border-top: 2px solid ${colorBrand};
        border-bottom: 2px solid ${colorBrand};
        display: block;
        filter: grayscale(0);
        transition: .5s linear;
        transition-property: transform, filter, opacity;

        &[data-src] {
            padding-bottom: 25%;
        }
    }

    &:nth-last-child(5) ~ * {
        margin-bottom: 0;
    }


    &:nth-child(5n),
    &:nth-child(6n-4),
    &:nth-child(7n),
    &:nth-child(8n-4) {
        img {
            transform-origin: right center 0;
            transform: rotateY(15deg);
        }
    }

    &:nth-child(5n-4),
    &:nth-child(6n),
    &:nth-child(7n-4),
    &:nth-child(8n) {
        img {
            transform-origin: left center 0;
            transform: rotateY(-15deg);
        }
    }

    ${props => !props.filler && `
      &:hover {
          filter: grayscale(0.9);
          transition-delay: .3s;

          img {
              opacity: 0;
              transform: rotateY(0deg);
              transition-duration: .5s;
          }
      }
    `}

    @media ${breakpoint(breakpointsMap.small, breakpointsMap.medium)} {
      margin-bottom: 4px;

      &:nth-child(5n),
      &:nth-child(6n-4),
      &:nth-child(7n),
      &:nth-child(8n-4) {
          img {
              transform-origin: right center 0;
              transform: rotateY(10deg);
          }
      }
      &:nth-child(5n-4),
      &:nth-child(6n),
      &:nth-child(7n-4),
      &:nth-child(8n) {
          img {
              transform-origin: left center 0;
              transform: rotateY(-10deg);
          }
      }
    }

    @media ${breakpoint(breakpointsMap.default, breakpointsMap.small)} {
      margin-bottom: 0;
      &:nth-child(5n),
      &:nth-child(6n-4),
      &:nth-child(7n),
      &:nth-child(8n-4) {
          img {
              transform-origin: right center 0;
              transform: rotateY(0);
          }
      }
      &:nth-child(5n-4),
      &:nth-child(6n),
      &:nth-child(7n-4),
      &:nth-child(8n) {
          img {
              transform-origin: left center 0;
              transform: rotateY(0);
          }
      }
      img {
          border: 0;
      }
    }
`

const ImageGrid = ({ items }) => {
  return (
    <Wrapper>
      {items && items.map(({title, previewImg}) => {
        return (
          <GridCell to={`/work/${title.toLowerCase()}`} src={previewImg.src.publicURL}>
              <Img alt={title} src={previewImg.src.publicURL}/>
          </GridCell>
        )})
      }
      <GridCell filler>
        <StaticImage src="../images/content/filler.jpg" alt="nothing here"/>
       </GridCell>
    </Wrapper>
  )
}


export default ImageGrid;
