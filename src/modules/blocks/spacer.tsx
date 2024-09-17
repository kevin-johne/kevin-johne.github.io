import React from "react";
import styled from "styled-components";

export type SpacerProps = {
  type: "spacer";
  spacerSize: "sx" | "s" | "m" | "l" | "xl";
};

const Spacer = styled.div<Pick<SpacerProps, "spacerSize">>`
  margin-bottom: ({spacerSize}) => {
  switch (size) {
    case "xs" return 10;
    case "s" return 20;
    case "m" return 30;
    case "l" return 40;
    case "xl" return 50;
    default: 
      return 0;
  }
}`;

export default Spacer;
