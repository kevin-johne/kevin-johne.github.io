import React from "react";
import { InlineLink } from "../../patterns/link";

export type LinksProps = {
  type: "links";
  links: { href: string; text: string }[];
};

export default function Links({ links }: LinksProps) {
  if (!links || links.length === 0) return null;
  return (
    <>
      {links.map(({ href, text }, index) => (
        <p key={index}>
          <InlineLink as="a" href={href} target="_blank">
            {text}
          </InlineLink>
        </p>
      ))}
    </>
  );
}
