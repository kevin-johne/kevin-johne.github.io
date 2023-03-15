import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {colorBrand, colorGray20, colorGray75} from "../setting/theme";

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

const PaginationImageContainer = styled.div`
  transition: .2s ease-in;
  transition-property: clip-path;
  display: block;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  background-color: ${colorBrand};
`

const PaginationImage = styled(GatsbyImage)`

`

const ButtonContainer = styled(Link)`
  position: relative;
  display: inline-block;
  width: 120px;
  color: ${colorGray20};
  border: 2px solid transparent;

  &:visited {
      color: ${colorGray20};
  }

  &:hover {
      border-color: ${colorBrand};

      ${PaginationTitle} {
          top: calc(100% - 2rem);
          padding: 0 5px;
      }

      ${PaginationSubtitle},
      ${PaginationImage} {
          opacity: 0;
      }

      ${PaginationImageContainer} {
          border-radius: 100%;
      }
  }

  ${props => props.direction === "previous" && `
    text-align: right;

    ${PaginationTitle},
    ${PaginationSubtitle} {
        right: 0;
    }

    &:hover {
        ${PaginationImageContainer} {
            clip-path: polygon(55% 60%, 45% 50%, 45% 50%, 55% 40%);
        }
    }
  `}

  ${props => props.direction === "next" && `
    margin-left: auto;
    &:hover {
        ${PaginationImageContainer} {
              clip-path: polygon(55% 50%, 45% 60%, 45% 40%, 55% 50%);
          }
      }
  `}
`

const Wrapper = styled.div`
  display: flex;
  margin-top: 120px;
  margin-bottom: 120px;

  ${PaginationSubtitle},
  ${PaginationTitle} {
      transition: .2s ease-in;
      transition-property: color opacity top padding;
      padding: .5em 0;
      display: block;
      pointer-events: none;
  }

  ${PaginationImage} {
      transition: opacity .15s ease-in .15s;
      display: block;
      opacity: 1;
  }
`

const PaginationButton = ({direction, link, title, image}) => {
  const prev = direction === "previous";
  const next = direction === "next";
  return (

    <ButtonContainer direction={direction} to={link}>
      <PaginationSubtitle>{prev && "prev project"}{next && "next project"}</PaginationSubtitle>
      <PaginationTitle>{ title }</PaginationTitle>
      <PaginationImageContainer>
          <PaginationImage image={ image } alt={ title }/>
      </PaginationImageContainer>
    </ButtonContainer>
  )
}

const ProjectPagination = ({previous, next}) => {
  return (
  <Wrapper>
    {previous && <PaginationButton title={previous.title} direction={"previous"} image={getImage(previous.logo)} link={`/work/${ previous.path.toLowerCase()}`}/>}
    {next && <PaginationButton title={next.title} direction={"next"} image={getImage(next.logo)} link={`/work/${ next.path.toLowerCase()}`}/>}
  </Wrapper>
)}

export default ProjectPagination;
