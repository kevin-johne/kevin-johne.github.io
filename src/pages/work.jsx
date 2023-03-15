import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import ImageGrid from "../modules/image-grid";
import { Column, Content } from "../modules/content";
import { Feature } from "../modules/features";
import { Underline } from "../patterns/typo";

const Work = ({ data }) => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Style guides, e-commerce, web apps, and angular apps are the kind Kevin Guy has experience with. His portfolio is displaying recently finished projects as a frontend developer."
        />
        <title>Kevin Guy - portfolio</title>
      </Helmet>
      <Content>
        <h1>Portfolio</h1>
        <Column columns="1" width="40%">
          <p>
            Being a software developer for more than 10 years I had exposure to
            many different programming languages and industries. What started by
            writing scripts in Basic and Pascal to buy domains and look up
            namespaces, became Widgets and Applets in Java and PHP during
            University, and in the end my career building websites and
            applications using too many frameworks and libraries to mention
            here. This page gives you an overview of the most recent projects
            I've worked on.
          </p>
          <p>
            I build small branding pages, high traffic and optimised E-Commerce
            sites, and well tested, functional, and scalable business
            applications.
          </p>
        </Column>
      </Content>
      <Content>
        <Feature reverse>
          <ImageGrid items={data.applications.nodes} />
          <h2>
            <Underline>Applications</Underline>
          </h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          id incidunt non reprehenderit quibusdam dolore quasi corporis.
          Repellat eum rerum beatae porro consectetur? Esse quia consectetur
          illum assumenda quisquam facilis.
        </Feature>

        <Feature>
        <ImageGrid items={data.websites.nodes} />

          <div>
            <h2>
              <Underline>Websites</Underline>
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              minima dolore eius totam provident commodi corporis assumenda
              voluptatum, reiciendis, veritatis aut, ea beatae cumque eaque
              officia voluptate amet porro? Repellendus.
            </p>
          </div>
        </Feature>
      </Content>
    </>
  );
};

export const pageQuery = graphql`
  {
    applications: allProjectsJson(
      filter: { show: { eq: true }, type: { eq: "application" } }
    ) {
      nodes {
        title
        path
        brandColor
        logo {
          publicURL
        }
      }
    }
    websites: allProjectsJson(
      filter: { show: { eq: true }, type: { eq: "website" } }
    ) {
      nodes {
        title
        path
        brandColor
        logo {
          publicURL
        }
      }
    }
  }
`;

export default Work;
