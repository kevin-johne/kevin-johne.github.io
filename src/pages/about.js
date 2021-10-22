import {Helmet} from "react-helmet";
import {Column, Content} from "../modules/content";
import React from "react";

const About = () => (
  <>
    <Helmet>
      <meta name="description" content="About me"/>
      <title>Kevin Johne - About</title>
    </Helmet>
    <Content>
      <h1>Hej Hej, <br/>
        I&#8217;m Kevin Johne
      </h1>
      <Column>
        <p>
          a frontend engineer with a Bachelor of Science degree in Computer Science from the West Saxony University of Applied
          Science in Zwickau, Germany.
          Currently living in London, United Kingdom.
        </p>
        <p>
          During my past projects I found my pleasure in coding style guides. I believe in long living software and a
          well defined style guide is a important key.
          I follow the principle of patterns, modules, and pages. A collection where developers, designers, project
          managers pick from, to create new content.
        </p>
        <p>
          Currently I am available for contract work. I am looking forward to be in a multidisciplinary
          environment with a great focus on web design and UX.
        </p>
      </Column>
    </Content>
  </>
)

export default About;
