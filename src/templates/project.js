import React from "react"
import styled from "styled-components"
import Layout from "./layout";
import {Helmet} from "react-helmet";
import ImageGrid from "../modules/image-grid";

const Project = ({pageContext: { project }}) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={project.title} />
        <title>Kevin Johne - portfolio - {project.title}</title>
      </Helmet>
    </>
  )
}

export default Project;
