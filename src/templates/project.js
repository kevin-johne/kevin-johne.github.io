import React from "react"
import {Helmet} from "react-helmet";
import {Column, Content} from "../modules/content";
import Tags from "../patterns/tags";
import {InlineLink} from "../patterns/link";
import Slider from "../modules/slider";
import {graphql} from "gatsby";

const Project = ({data : {projectsJson :project}}) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={project.title} />
        <title>Kevin Johne - portfolio - {project.title}</title>
      </Helmet>

      <Content>
        <h1>{project.title}</h1>
        <Tags list={project.tags}/>
        <Column>
          {project.descriptions && project.descriptions.map(description => <p>{description}</p>)}
        </Column>
        {project.links && project.links.map(link => <p><InlineLink as="a" href={`https://${link}`} target="_blank">visit {link}</InlineLink></p>)}
      </Content>
      <Slider slides={project.features}/>
    </>
  )
}

export const pageQuery = graphql`
  query project($id: String){
    projectsJson(id: { eq: $id }) {
      title
      descriptions
      year
      tags
      features {
        text
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default Project;
