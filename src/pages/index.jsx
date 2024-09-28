import * as React from "react";

import Teaser from "../modules/teaser/teaser";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

function IndexPage({ data: { projects } }) {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Kevin Guy a Full-Stack Engineer. Application development, Living style guides, and joyful UI development."
        />
        <title>Kevin Guy - Full-Stack Engineer</title>
      </Helmet>
      <Teaser
        title="Full-Stack Engineer"
        subtitle="More than 10 years of experience developing eCommerce and complex business applications"
        projects={projects.nodes}
      />
    </>
  );
}

export const pageQuery = graphql`
  query projects {
    projects: allProjectsJson(
      filter: { show: { eq: true } }
      sort: { fields: year, order: ASC }
    ) {
      nodes {
        title
        path
        brandColor
        alternativeLogo {
          publicURL
        }
      }
    }
  }
`;

export default IndexPage;
