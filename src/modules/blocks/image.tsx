import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import React from "react";

export type ImageProps = {
  type: "image";
  image: {
    src: ImageDataLike;
    alt: string;
  };
};

export default function Image({ image: { src, alt } }: ImageProps) {
  const image = getImage(src);
  if (!image) {
    return null;
  }
  return <GatsbyImage image={image} alt={alt} />;
}
