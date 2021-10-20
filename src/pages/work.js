import React from "react"
import styled from "styled-components"
import {Helmet} from "react-helmet";
import {graphql} from "gatsby";
import ImageGrid from "../modules/image-grid";
import {Column, Content} from "../modules/content";

const Work = ({data}) => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Style guides, e-commerce, web apps, and angular apps are the kind Kevin Johne has experience with. His portfolio is displaying recently finished projects as a frontend developer."/>
        <title>Kevin Johne - portfolio</title>
      </Helmet>
      <Content>
        <h1>Portfolio</h1>
        <Column>
          <p>
            In the last years I've been working as a frontend developer and was lucky enough to got involved in creative
            and
            interesting projects. My work was dedicated to create living style guides, web apps, e-commerce platforms for
            international brands.
          </p>
        </Column>
      </Content>
      <ImageGrid items={data.allProjectsJson.nodes}/>
    </>
  )
}

export const pageQuery = graphql`
  {
    allProjectsJson {
      nodes {
        title
        previewImg {
          src {
            publicURL
          }
        }
      }
    }
  }
`

export default Work;
