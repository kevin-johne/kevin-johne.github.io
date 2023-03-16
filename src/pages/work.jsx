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
            many different programming languages and industries, developing all
            sorts of websites and applications.
          </p>
          <p>
            The journey started for me by writing scripts in Pascal to buy
            domains and look up namespaces. during my time at University
            manifested knowledge in OOP, TDD using Java and PHP. Then found my
            long lasting pleasure with human and computer interactions and
            became a frontend developer.
          </p>
          <p>
            I have build small branding pages, high traffic eCommerce shops, and
            business applications. The following projects should give you a good
            overview.
          </p>
        </Column>
      </Content>
      <Content>
        <Feature>
          <div>
            <ImageGrid items={data.applications.nodes} />
          </div>
          <h2>
            <Underline>Applications</Underline>
          </h2>
          <p>
            Here are some of my applications I worked on using different
            frontend stacks depending on the project from AngularJS to React.
            The systems on my portfolio including a B2B/B2C Portal for Veolia, a
            CMS called Skylark at Ostmodern, and a n OMS for Ströer.
          </p>
          <p>
            I transformed business requirements, in to clean maintainable code,
            well tested user behaviours and scalable architecture, that made the
            clients more efficient in their daily tasks and offered new business
            opportunities.
          </p>
        </Feature>

        <Feature reverse>
          <div>
            <ImageGrid items={data.websites.nodes} />
          </div>
          <div>
            <h2>
              <Underline>Websites</Underline>
            </h2>
            <p>
              Websites are usually less complex compared to application, hence
              are faster to develop and need less time input. When working for
              an agency it is possible to work on several websites
              simultaneously, as you can see of the time at Salmon and Denkwerk.
            </p>
            <p>
              As I not just like to write good software, but as well have a good
              eye for design, building sometimes a new website instead of an
              application is refreshing.
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
