import React from "react";
import styled from "styled-components";

export type SpacerProps = {
  type: "spacer";
  spacerSize: "xs" | "s" | "m" | "l" | "xl";
};

const Spacer = styled.div<Pick<SpacerProps, "spacerSize">>`
  margin-bottom: ${({ spacerSize }) => {
    switch (spacerSize) {
      case "xs":
        return "10px";
      case "s":
        return "20px";
      case "m":
        return "60px";
      case "l":
        return "120px";
      case "xl":
        return "240px";
      default:
        return 0;
    }
  }};
`;

export default Spacer;
