import React from "react"
import styled from "styled-components"
import { InlineLink } from "../patterns/link";
import {colorGray20, colorGray75} from "../setting/theme";

const PaginationTitle = styled.span`
  position: absolute;
  top: 100%;
  font-weight: bold;
`

const PaginationSubtitle = styled.span`
  position: absolute;
  bottom: 100%;
  padding: 5px 0;
  color: ${colorGray75};
`

const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 120px;
  color: ${colorGray20};
  border: 2px solid transparent;

  &:visited {
      color: ${colorGray20};
  }

  ${props => props.direction === "previous" && `
    text-align: right;

    ${PaginationTitle},
    ${PaginationSubtitle} {
        right: 0;
    }
  `}
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 120px;
  margin-bottom: 120px;
`

const PaginationButton = ({direction, link, title}) => {
  const prev = direction === "previous";
  const next = direction === "next";
  return (

    <ButtonContainer direction={direction} >
      <PaginationSubtitle>{prev && "prev project"}{next && "next project"}</PaginationSubtitle>
      <InlineLink to={link}>{ title }</InlineLink>
    </ButtonContainer>
  )
}

const ProjectPagination = ({previous, next}) => {
  return (
  <Wrapper>
    {previous && <PaginationButton title={previous.title} direction={"previous"} link={`/work/${ previous.path.toLowerCase()}`}/>}
    {next && <PaginationButton title={next.title} direction={"next"}  link={`/work/${ next.path.toLowerCase()}`}/>}
  </Wrapper>
)}

export default ProjectPagination;
