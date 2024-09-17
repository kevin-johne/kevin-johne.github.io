import React from "react";
import Description, { DescriptionProps } from "./description";
import Links, { LinksProps } from "./links";
import Image, { ImageProps } from "./image";

type BlockProps = DescriptionProps | LinksProps | ImageProps;
export default function Block(props: BlockProps) {
  switch (props.type) {
    case "description":
      return <Description {...props} />;
    case "image":
      return <Image {...props} />;
    case "links":
      return <Links {...props} />;
    // case "tags":
    //   return <Tags data={data} />;
    default:
      return null;
  }
}
