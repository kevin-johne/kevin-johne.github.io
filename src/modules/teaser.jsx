import React from "react";
import styled from "styled-components";
import { Button } from "../patterns/button";


const Wrapper = styled.div`
  h1 {
    margin-bottom: 10px;
  }

  h2 {
    
  }
`

export const Teaser = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      <Button>My Work</Button>
    </Wrapper>
  );
};
