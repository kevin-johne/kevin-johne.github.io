import * as React from "react";

import responsiveImage from "../images/content/responsive.svg";
import styleguideImage from "../images/content/styleguide.svg";
import engineeringImage from "../images/content/engineering.svg";
import Layout from "../components/layout";
import {Feature, ModFeature} from "../modules/features";
import {Img} from "../patterns/img";
import {InlineLink} from "../patterns/link";
import {email} from "../setting/data";

const IndexPage = () => {
  return (
    <Layout>
      <ModFeature>
        <h1>
          Freelance Frontend Developer<br/>
          Available for <InlineLink href={`mailto:${email}`}>contract</InlineLink> work
        </h1>
        <Feature>
          <Img src={styleguideImage} alt="living style guide"/>
          <h2>I code living style guides, <br/> you will love</h2>
          <p>
            For a long living website a style guide is of great importance. Because all different departments in the
            creation pipeline of the application are in need of talking the same language. This language is the
            style guide, it is the source of truth everyone in the pipeline can rely on.
          </p>
          <p>
            I can develop a platform for your user experience and visual designer, backend and frontend developer as
            well as project manager.
          </p>
        </Feature>
        <Feature>
          <Img src={responsiveImage} alt="All sorts of devices with different screen size"/>
          <h2>I make responsive websites,<br/> your user will love</h2>
          <p>
            My tool set includes a flexible media query library, to get your application in perfect light for every
            screen size. Your user should have the possibility to experience your app from his phone, tablet, watch,
            computer or television.
          </p>
          <p>
            Already in the process of design your application, we need to think about how and which content
            is displayed. It mainly depends on the device your audience is using the most.
          </p>
        </Feature>
        <Feature>
          <Img src={engineeringImage} alt="Coffee next to the computer and a engineering book"/>
          <h2>I do software engineering,<br/> your business will love</h2>
          <p>
            Are you planning a frontend application mainly written in JavaScript? Let me help you structure, define
            core functionality or extend your modules. I have 6 years of professional experience in developing with
            JavaScript.
          </p>
          <p>
            My current working dev stack boiled down to the essentials are React, Redux, vanilla JavaScript, SCSS,
            Webpack, Git, and WebStorm.
          </p>
        </Feature>

      </ModFeature>
    </Layout>
  )
}

export default IndexPage