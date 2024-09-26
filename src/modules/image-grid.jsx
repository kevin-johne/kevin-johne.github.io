import React from "react";
import styled from "styled-components";
import { Img } from "../patterns/img";
import { breakpoint, breakpointsMap } from "../utils/breakpoints";
import { hexToRgba } from "../utils/color";
import { Link } from "gatsby";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 30px;
  margin-bottom: 60px;

  @media ${breakpoint(breakpointsMap.default, breakpointsMap.medium)} {
    margin-bottom: 30px;
  }
`;

const GridCell = styled(Link)`
  position: relative;
  background-color: ${(props) => props.brandColor};
  box-shadow: 0px 4px 16px ${(props) => hexToRgba(props.brandColor, 0.25)};
  padding-top: 100%;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 10px 32px ${(props) => hexToRgba(props.brandColor, 0.7)};
  }

  div {
    text-align: center;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
  }

  img {
    margin-top: 20%;
    height: 70px;
    display: block;
    margin-bottom: 15px;
  }

  p {
    margin: 0;
    color: white;
    font-weight: bold;
    font-size: 20px;
  }
`;

const ImageGrid = ({ items }) => {
  return (
    <Wrapper>
      {items &&
        items.map(({ title, path, logo, brandColor }, index) => {
          return (
            <GridCell
              to={`/work/${path.toLowerCase()}`}
              brandColor={brandColor}
              src={logo.publicURL}
              key={index}
            >
              <div>
                <Img alt={title} src={logo.publicURL} />
                <p>{title}</p>
              </div>
            </GridCell>
          );
        })}
    </Wrapper>
  );
};

export default ImageGrid;
