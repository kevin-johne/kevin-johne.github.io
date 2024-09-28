import { ISharpGatsbyImageArgs } from "gatsby-plugin-image";

export type Project = {
  title: string;
  path: string;
  brandColor: string;
  logo: {
    publicURL: string;
  };
  alternativeLogo: {
    publicURL: string;
  };
};
