import React from "react";
import Image, { ImageProps } from "./image";
import Description, { DescriptionProps } from "./description";
import styled from "styled-components";
import { breakpoint, breakpointsMap } from "../../utils/breakpoints";
import Spacer from "./spacer";

export type BlockContentImageProps = {
  type: "contentImage";
} & ContentImageProps;

export type ContentImageProps = {
  title: string;
  image: ImageProps;
  content: DescriptionProps["content"];
};

const Wrapper = styled.div`
  display: grid;

  @media ${breakpoint(breakpointsMap.large)} {
    grid-template-columns: 1fr 2fr;
    gap: 40px;
  }
`;

export default function ContentImage(props: ContentImageProps) {
  return (
    <div>
      <Wrapper>
        <div>
          <h2>{props.title}</h2>
          <Description content={props.content} />
        </div>
        <Image {...props.image} />
      </Wrapper>
      <Spacer spacerSize={"l"} />
    </div>
  );
}
