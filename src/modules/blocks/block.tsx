import React from "react";
import Description, { DescriptionProps } from "./description";
import Image, { ImageProps } from "./image";
import Spacer, { SpacerProps } from "./spacer";

type BlockProps = DescriptionProps | ImageProps | SpacerProps;
export default function Block(props: BlockProps) {
  switch (props.type) {
    case "description":
      return <Description {...props} />;
    case "image":
      return <Image {...props} />;
    case "spacer":
      return <Spacer {...props} />;
    // case "tags":
    //   return <Tags data={data} />;
    default:
      return null;
  }
}
