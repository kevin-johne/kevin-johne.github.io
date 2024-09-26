import React from "react";
import Description, {
  BlockDescriptionProps,
  DescriptionProps,
} from "./description";
import Image, { BlockImageProps, ImageProps } from "./image";
import Spacer, { SpacerProps } from "./spacer";
import ContentImage, { BlockContentImageProps } from "./contentImage";

type BlockProps =
  | BlockDescriptionProps
  | BlockImageProps
  | BlockContentImageProps
  | SpacerProps;
export default function Block(props: BlockProps) {
  switch (props.type) {
    case "description":
      return <Description {...props} />;
    case "image":
      return <Image {...props.image} />;
    case "spacer":
      return <Spacer {...props} />;
    case "contentImage":
      return <ContentImage {...props} />;
    // case "tags":
    //   return <Tags data={data} />;
    default:
      return null;
  }
}
