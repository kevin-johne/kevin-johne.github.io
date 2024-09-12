import { Helmet } from "react-helmet";
import { Column, Content } from "../modules/content";
import React from "react";
import resumeFile from "../files/resume.pdf";
import { Underline } from "../patterns/typo";
import styled from "styled-components";
import { breakpoint, breakpointsMap } from "../utils/breakpoints";
import Me from "../images/content/me.jpg";

import { Feature } from "../modules/features";

const Sections = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-gap: 20px;

  @media ${breakpoint(breakpointsMap.medium)} {
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }

  ul {
    margin: 0;
    padding: 0 0 0 15px;
  }
`;

const NoListStyle = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ProfilePicture = styled.img`
  width: 100%;
  border-radius: 100%;
  padding: 20px;
`;

const Resume = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Recent work experience, education, and awards. CV, Résumé"
        />
        <title>Kevin Guy - Resumé</title>
      </Helmet>
      <Content>
        <Feature reverse>
          <ProfilePicture src={Me} />

          <div>
            <h1>Hello I&#8217;m Kevin Guy</h1>
            <p>
              a frontend engineer with a Bachelor of Science degree in Computer
              Science from the West Saxony University of Applied Science in
              Zwickau, Germany. Currently living in London, United Kingdom.
            </p>
            <p>
              I am a quality driven and focused frontend engineer with more than
              10 years of experience efficiently using web technologies to
              develop complex web applications for international brands. Clients
              and colleagues enjoy collaborating with me to build award winning
              websites and applications. I have a keen eye for design and always
              go the extra mile to craft a better experience. I am a specialist
              in JavaScript with an extensive knowledge in full stack
              development. I apply fundamental knowledge and new tools to craft
              a unique and modern experience.
            </p>
            <a href={resumeFile} className="link" target="_blank">
              Download Résumé
            </a>
          </div>
        </Feature>

        <h2>
          <Underline>Work Experience</Underline>
        </h2>
        <Sections>
          <div>
            <h3>May 23 &mdash; May 24: DoorFeed (Contract)</h3>
            <p>
              Modernised property tech portal with a new in-house UI library.
              Streamlined workflows for internal team by addressing new features
              which obsolete external sheets and tools. Built a revolutionary
              tenancy platform which automates the tenancy progress at scale
            </p>
            <ul>
              <li>
                <b>
                  Automate operations for rental applications and tenant
                  management
                </b>
                , automating the progress from marketing, book viewings through
                to the final check-in.
              </li>
              <li>
                <b>New project management tools</b>, by developing a custom
                gantt chart for internal team to organize renovation projects
              </li>
              <li>
                <b>Reworked UI and UX for scale</b>, by introducing a grid to
                align content, refining existing code into reusable components,
                pixel perfect design implementation, and picking better tools
                which provide options to build good user interface.
              </li>
              <li>
                <b>Improved code quality and product stability</b>, by using
                TypeScript generics, Zod schemas, and type-safe SQL queries.
              </li>
            </ul>
          </div>
          <div>
            <h3>Jun 22 &mdash; Feb 23: Veolia UK (Contract)</h3>
            <p>
              Developed from the ground up a new frontend application which is
              the one stop application for all business to business customers.
            </p>
            <ul>
              <li>
                <b>Reduced customer service enquiry time drastically</b>, by
                promoting guidance to self-help, and developing an interactive
                chatbot to collect additional enquiry information before agent
                is required
              </li>
              <li>
                <b>Sped up development and consistency of UI</b>, by creating a
                reusable component library and configurable design system
              </li>
              <li>
                <b>Automated deployments with feedback</b>, by replacing the
                manual deployments with a CD process using Webpack, Blt, GitHub
                and Acquia pipelines
              </li>
            </ul>
          </div>
          <div>
            <h3>Nov 21 &mdash; Apr 22: DocMorris (Contract)</h3>
            <p>
              Frontend ownership of DocMorris Care and transforming it into a
              well performing web application.
            </p>
            <ul>
              <li>
                <b>Improved ease of development</b>, by introducing code
                management for multiple zip files into mono-repo, webpack
                builds, CD/CI, and migrating an undocumented custom framework
                into native solutions
              </li>
              <li>
                <b>Optimized Google Page Speed from 20 to 90</b>, by using the
                library techniques of Drupal 9, reducing JS, optimizing images
                and writing a module to insert critical CSS
              </li>
              <li>
                <b>Provided automated migration solution</b>, by exporting
                dynamic content into static assets, copying to eCommerce
                platform and loading via style isolating Web Component
              </li>
              <li>
                <b>Halved hosting costs</b>, by offloading rendering to clients
                using Drupal Headless and React
              </li>
            </ul>
          </div>
          <div>
            <h3>Apr 19 &mdash; Apr 21: Ostmodern</h3>
            <p>
              Frontend ownership of B2B2C SaaS CMS used by products with 1M+
              users for 1-Tier entertainment and sport businesses{" "}
              <a
                className="link"
                href="http://www.skylarkplatform.com"
                target="_blank"
              >
                skylark.com
              </a>
            </p>
            <ul>
              <li>
                Led 3 frontend developers and{" "}
                <b>improved developer retention</b>, by building a good
                relationship and strong support
              </li>
              <li>
                <b>Established product improvements</b> by guidelines, technical
                road map, best practices and pitched to business
              </li>
              <li>
                <b>Successfully migrated stack</b> from AngularJS, Gulp,
                Jasmine, Selenium to React, Redux, TS, Webpack, Jest, RTL,
                Cypress, whilst maintaining service-level agreement of 99.9%,
                and reduced feature development from 2 months to 2 weeks
              </li>
              <li>
                <b>Developed integrated multimedia uploader</b>, taking
                integration of video streaming services from 20 weeks to 3 weeks
              </li>
            </ul>
          </div>
          <div>
            <h3>Dec 17 &mdash; Feb 19: Salmon (Contract)</h3>
            <p>
              Led a team for a luxury fashion brand with close client relations
              to redesign and rebuilt eCommerce platforms with LCP &#60; 1s.
            </p>
            <ul>
              <li>
                <b>Increased yearly revenue</b> of luxury fashion brand, by
                improving web vitals through rebuilding eCommerce platform using
                React, Redux, Webpack
              </li>
              <li>
                <b>Mentored junior developers</b> using pair programming and
                code reviews
              </li>
              <li>
                <b>Improved user retention</b> using A/B testing tool Optimizely
                for various clients
              </li>
            </ul>
          </div>
          <div>
            <h3>Apr 17 &mdash; Jul 17: Hybrid Theory</h3>
            <ul>
              <li>
                Leading the team in AngularJS development and best practices for
                frontend technologies
              </li>
              <li>
                Continues development and integration with different stages of
                testing, automated pipelines, and release strategy
              </li>
            </ul>
          </div>
          <div>
            <h3>Jun 15 &mdash; Mar 17: Denkwerk</h3>
            <ul>
              <li>
                Transformed design to pixel perfect and responsive and
                award-winning websites
              </li>
              <li>
                Developed living style guides for Gedore’s eCommerce and brand
                website, and Stroer’s green field project
              </li>
              <li>Estimated and calculated projects</li>
              <li>
                Consulted early state projects and designers on possible costs
                and benefits
              </li>
              <li>Working on 3 AngularJS application</li>
              <li>
                Apply WCAG compliance to Condor’s customers facing website
              </li>
              <li>Representing Frontend development at recruiting events</li>
            </ul>
          </div>
          <div>
            <h3>Jan 12 &mdash; Jun 14: Several Clients</h3>
            <ul>
              <li>
                Full-service web solutions for small businesses, including
                design, development, and social media
              </li>
            </ul>
          </div>
          <div>
            <h3>Aug 11 &mdash; Jan 12: Konsultaner</h3>
            <ul>
              <li>Build companies own brand website</li>
              <li>
                Developed modular jQuery-plugins for internal use or partnering
                agencies
              </li>
            </ul>
          </div>
        </Sections>

        <h2>
          <Underline>Talks</Underline>
        </h2>
        <Sections>
          <div>
            <h3>2018</h3>
            <a
              className="link"
              target="_blank"
              href="https://youtu.be/Pkgjyn5Nw2A"
            >
              Introduction to WebAssembly
            </a>{" "}
            at Salmon frontend meet up
          </div>
        </Sections>

        <h2>
          <Underline>Education</Underline>
        </h2>
        <Sections>
          <div>
            <h3>2014 &mdash; 2015</h3>
            Master Program in Social Media and Web Technologies, Växjö, Sweden
          </div>
          <div>
            <h3>2009 &mdash; 2013</h3>
            Bachelor of Science in Computer Science, Zwickau, Germany
          </div>
          <div>
            <h3>2006 &mdash; 2009</h3>
            Technical Assistant for Computer Science
          </div>
        </Sections>

        <h2>
          <Underline>Awards</Underline>
        </h2>
        <Sections>
          <div>
            <h3>2016 Red Dot Award: Communication Design</h3>
            <NoListStyle>
              <li>🥇 Gedore Website </li>
              <li>🥇 New Baraka Website </li>
              <li>🥇 Zwilling Brand Website </li>
            </NoListStyle>
          </div>
          <div>
            <h3>2016 IF Award</h3>
            <NoListStyle>
              <li>🥇 New Baraka Website </li>
            </NoListStyle>
          </div>
        </Sections>

        <a href={resumeFile} className="link" target="_blank">
          Download Résumé
        </a>
      </Content>
    </>
  );
};

export default Resume;
