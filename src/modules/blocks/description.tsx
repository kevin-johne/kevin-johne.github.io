import React from "react";
import { Column } from "../content";

export type DescriptionProps = {
  type: "description";
  content: string[];
};
export default function Description({ content }: DescriptionProps) {
  if (!content || content.length === 0) return null;

  if (content.length === 1) {
    return <p>{content[0]}</p>;
  }

  return (
    <Column>
      {content.map((description, index) => (
        <p key={index}>{description}</p>
      ))}
    </Column>
  );
}
