import React from "react";
import styled from "styled-components"
import {colorGray75} from "../setting/theme";

const Wrapper = styled.ul`
  display: flex;
`;

const Tag = styled.li`
  list-style: none;
  font-weight: bold;
  color: ${colorGray75};

  &:before {
      content: '#';
  }

  &:not(:last-child) {
      margin-right: 20px;
  }
`

const Tags = ({ list }) => (
  <Wrapper>
    {list.map((entry, index) => <Tag key={index}>{entry}</Tag>)}
  </Wrapper>
)

export default Tags
