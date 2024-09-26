import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { InlineLink } from "../patterns/link";
import { colorGray20, colorGray75 } from "../setting/theme";
import { hexToRgba } from "../utils/color";

const PaginationTitle = styled.span`
  font-weight: bold;
`;

const PaginationSubtitle = styled.span`
  padding: 5px 0;
  color: ${colorGray75};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  color: ${colorGray20};
  border: 2px solid transparent;

  &:visited {
    color: ${colorGray20};
  }

  ${(props) =>
    props.direction === "previous" &&
    `
    text-align: left;

    ${PaginationTitle},
    ${PaginationSubtitle} {
        left: 0;
    }
  `}

  ${(props) =>
    props.direction === "next" &&
    `
    text-align: right;

    ${PaginationTitle},
    ${PaginationSubtitle} {
        right: 0;
    }
  `}
`;

const Wrapper = styled.div`
  position: sticky;
  bottom: 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  box-shadow: ${({ sticky }) =>
    sticky
      ? "0px 2px 16px rgba(0, 0, 0, 0.08), 0px 0px 4px rgba(0, 0, 0, 0.1)"
      : "0px 0px 0px rgba(0,0,0,0)"};
  transition: box-shadow 0.3s;
  border-radius: 10px;
  margin: 120px -20px;
`;

const PaginationButton = ({ direction, link, title }) => {
  const prev = direction === "previous";
  const next = direction === "next";
  return (
    <ButtonContainer direction={direction}>
      <PaginationSubtitle>
        {prev && "prev project"}
        {next && "next project"}
      </PaginationSubtitle>
      <div>
        <InlineLink to={link}>{title}</InlineLink>
      </div>
    </ButtonContainer>
  );
};

export default function ProjectPagination({ previous, next, scrollContainer }) {
  const [visible, setVisible] = React.useState(false);
  const placeholder = useCallback((node) => {
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });
    });
    observer.observe(node);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      <div ref={placeholder}></div>
      <Wrapper sticky={!visible}>
        {previous ? (
          <PaginationButton
            title={previous.title}
            direction={"previous"}
            link={`/work/${previous.path.toLowerCase()}`}
          />
        ) : (
          <div></div>
        )}
        {next ? (
          <PaginationButton
            title={next.title}
            direction={"next"}
            link={`/work/${next.path.toLowerCase()}`}
          />
        ) : (
          <div></div>
        )}
      </Wrapper>
    </>
  );
}
