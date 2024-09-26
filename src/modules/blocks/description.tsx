import React from "react";
import { Column } from "../content";
import Spacer from "./spacer";

export type BlockDescriptionProps = {
  type: "description";
} & DescriptionProps;

type SpacerSize = "sx" | "s" | "m" | "l" | "xl";

export type DescriptionProps = {
  content: string[];
  spacerSize?: SpacerSize;
};
export default function Description({
  content,
  spacerSize = "m",
}: DescriptionProps) {
  if (!content || content.length === 0) return null;

  if (content.length === 1) {
    return <p>{content[0]}</p>;
  }

  return (
    <>
      <Column>
        {content.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </Column>
      <Spacer spacerSize={spacerSize} />
    </>
  );
}
