import { Helmet } from "react-helmet";
import { Column, Content } from "../modules/content";
import { ReactComponent as ResponsiveImage } from "../images/content/responsive.svg";
import { ReactComponent as StyleguideImage } from "../images/content/styleguide.svg";
import EngineeringImage from "../images/content/engineering.svg.jsx";
import { Feature } from "../modules/features";
import React from "react";
import { Underline } from "../patterns/typo";

export default () => (
  <>
    <Helmet>
      <meta name="description" content="Service, Software Engineering, Frontend Development, Style Guides, Consultancy" />
      <title>Kevin Guy - Service</title>
    </Helmet>
    <Content>
      <h1>What I can do for you</h1>
    <Feature>
      <EngineeringImage title="Coffee next to the computer and a engineering book" />
      <h2>
        <Underline>
          Software Engineering &mdash; scaling, tested and clean
        </Underline>
      </h2>
      <div>
        <p>
          Are you planning a frontend or backend application by using the power
          of JavaScript? Let me help you organize, build and scale your
          application. I have many years of professional experience developing
          well thought out application using JavaScript.
        </p>
        <p>
          I'm have a extensive knowledge of JavaScript, and of frameworks build
          around it, like React, Redux, Angular, GraphQL Client, Styled
          Components, Jest, Webpack, and many more. If there is a framework you
          are using but not in this list, I'm sure I can use my knowledge to
          pick that up.
        </p>
        <p>
          My skill don't end with JavaScript, I have understanding of
          containers, cloud services, continues integration and deployment, and
          don't shy away to cross programming languages. I'm enthusiastic about
          good software
        </p>
      </div>
    </Feature>
    <Feature reverse>
      <StyleguideImage title="living style guide" />
      <h2>
        <Underline>Style Guides &mdash; pages, modules and elements</Underline>
      </h2>
      <div>
        <p>
          For a long lasting application a style guide is of great importance. A
          style guide will list the pages, modules and elements which are making
          up the application. Communication between different departments will
          be easier and clearer. Everyone has access to the current state of the
          application and can create new things based on it, without guess work.
        </p>
        <p>
          There are so many advantages towards a style guide, some are that
          designers can use it to make up new modules of already existing
          elements. Developers can use it to create speedily new whole section
          of your application. Product Owner have an overview and can organize
          new features based on that. Communicating with other companies who
          work with you and building on top of your application, can start
          quickly and reliable.
        </p>
        <p>
          The software used is depending on your team, the main principle is to
          have a bridge between the design tools and developers tools. For
          example Figma for Designing the application and Storybook for
          development. These two application can sync the elements created.
          Storybook allows to embed Figma Files alongside the code base while
          the component is integrated, and embed the real developed component
          into Figma.
        </p>
      </div>
    </Feature>
    <Feature>
      <ResponsiveImage title="All sorts of devices with different screen size" />
      <h2>
        <Underline>Modern web &mdash; desktop, mobile and offline</Underline>
      </h2>
      <div>
        <p>
          The modern web goes further then responsiveness. What happens when you
          customer is offline, can shopping be continued? In best case the user
          can add more products and will be able to checkout as soon internet is
          back.
        </p>
        <p>
          Have all your customers the chance to have a good experience,
          accessibility increases your market and makes customers less
          frustrated. Are you providing a personalized experience, each person
          is shopping differently. Shopping is an example which can be applied
          to mostly all sectors.
        </p>
        <p>
          However it does not exclude responsiveness, make your application fast
          and user friendly with responsive design and web features.
          <ul>
            <li>
              Render images which have the correct ratio of quality and file
              size
            </li>
            <li>Use the current effect and events depending on devices</li>
            <li>
              Provide modern browsers with modern code and don't ship fallbacks
            </li>
          </ul>
        </p>
      </div>
    </Feature>
    </Content>
    
  </>
);

