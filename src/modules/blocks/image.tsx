import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import React from "react";

export type BlockImageProps = {
  type: "image";
  image: ImageProps;
} & ImageProps;

export type ImageProps = {
  src: ImageDataLike;
  alt: string;
};

export default function Image({ src, alt }: ImageProps) {
  const image = getImage(src);
  if (!image) {
    return null;
  }
  return <GatsbyImage image={image} alt={alt} />;
}
