import React from "react";
import { Helmet } from "react-helmet";
import { Content } from "../modules/content";
import Tags from "../patterns/tags";
import Slider from "../modules/slider";
import { graphql } from "gatsby";
import ProjectPagination from "../modules/project-pagination";
import Block from "../modules/blocks/block";

const Project = ({ data: { current: project, next, previous } }) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={project.title} />
        <title>Kevin Guy - portfolio - {project.title}</title>
      </Helmet>

      <Content>
        <h1>{project.title}</h1>
        <Tags list={project.tags} />

        {project.blocks &&
          project.blocks.map((block, index) => (
            <Block key={index} {...block} />
          ))}
      </Content>
      <Slider slides={project.features} />
      <ProjectPagination next={next} previous={previous} />
    </>
  );
};

export const pageQuery = graphql`
  query project($id: String, $prevId: String, $nextId: String) {
    current: projectsJson(id: { eq: $id }, show: { eq: true }) {
      title
      year
      tags
      blocks {
        type
        content
        image {
          src {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        links {
          text
          href
        }
      }
    }
    previous: projectsJson(id: { eq: $prevId }, show: { eq: true }) {
      title
      path
    }
    next: projectsJson(id: { eq: $nextId }, show: { eq: true }) {
      title
      path
    }
  }
`;

export default Project;
