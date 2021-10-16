import styled from "styled-components"
import {colorGray75} from "../setting/theme";

export const Tag = styled.ul`
  display: flex;

  li {
      list-style: none;
      font-weight: bold;
      color: ${colorGray75};

      &:before {
          content: '#';
      }

      &:not(:last-child) {
          margin-right: 20px;
      }
  }
`;
