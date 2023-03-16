import React from "react"
import {Helmet} from "react-helmet";
import {Column, Content} from "../modules/content";
import Tags from "../patterns/tags";
import {InlineLink} from "../patterns/link";
import Slider from "../modules/slider";
import {graphql} from "gatsby";
import ProjectPagination from "../modules/project-pagination";

const Project = ({data : {current :project, next, previous}}) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={project.title} />
        <title>Kevin Guy - portfolio - {project.title}</title>
      </Helmet>

      <Content>
        <h1>{project.title}</h1>
        <Tags list={project.tags}/>
        <Column>
          {project.descriptions && project.descriptions.map((description, index) => <p key={index}>{description}</p>)}
        </Column>
        {project.links && project.links.map((link, index) => <p key={index}><InlineLink as="a" href={`https://${link}`} target="_blank">visit {link}</InlineLink></p>)}
      </Content>
      <Slider slides={project.features}/>
      <ProjectPagination next={next} previous={previous}/>
    </>
  )
}

export const pageQuery = graphql`
  query project($id: String, $prevId: String, $nextId: String){
    current: projectsJson(id: { eq: $id }, show: {eq: true}) {
      title
      descriptions
      year
      tags
      links
      features {
        text
        title
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
    previous: projectsJson(id: { eq: $prevId}, show: {eq: true}) {
      title
      path
    }
    next: projectsJson(id: { eq: $nextId}, show: {eq: true}) {
      title
      path
    }
  }
`

export default Project;
