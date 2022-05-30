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
`

const Resume = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Recent work experience, education, and awards. CV, Résumé"
        />
        <title>Kevin Johne - Resumé</title>
      </Helmet>
      <Content>
        <Feature reverse>
          <ProfilePicture src={Me} />

          <div>
            <h1>Hello I&#8217;m Kevin Johne</h1>
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
            <h3>Nov 21 &mdash; Apr 22: DocMorris</h3>
            <ul>
              <li>Full stack development using React, Twig and Drupal 9</li>
              <li>Set up deployment strategy, CD, CI and webpack build</li>
              <li>
                Migrated a ridged bespoke framework to a standardized frontend
                stack, providing long-term support and flexibility
              </li>
              <li>
                Optimized page speed of{" "}
                <a
                  className="link"
                  href="http://www.docmorriscare.com"
                  target="_blank"
                >
                  docmorriscare.com
                </a>{" "}
                from ca 20 to ca 90 (Google Page Speed Score)
              </li>
            </ul>
          </div>
          <div>
            <h3>Apr 19 &mdash; Apr 21: Ostmodern</h3>
            <ul>
              <li>
                Frontend direction of the flag ship product Skylark, a VOD, and
                Live Media CMS with superior scheduling system -{" "}
                <a
                  className="link"
                  href="http://www.skylarkplatform.com"
                  target="_blank"
                >
                  skylark.com
                </a>
              </li>
              <li>
                Transformed Skylark from AngularJS to React without disruptions
              </li>
              <li>Code and functional test coverage using Jest and Cypress</li>
              <li>
                Configuration driven code base to allow for bespoke client
                requirements
              </li>
              <li>
                Optimised tools and workflow for efficient development and error
                resistant deployments
              </li>
              <li>
                Managed a team of 4 frontend developers, provided fortnightly
                one and ones, career plan and continues support to grow
                personally and professional
              </li>
              <li>Organized and lead interviews for frontend developers</li>
            </ul>
          </div>
          <div>
            <h3>Dec 17 &mdash; Feb 19: Salmon</h3>
            <ul>
              <li>
                Redesign of Tommy Hilfiger eCommerce -{" "}
                <a
                  className="link"
                  href="http://www.tommyhilfiger.com"
                  target="_blank"
                >
                  tommyhilfiger.com
                </a>
              </li>
              <li>
                Rebuilding from scratch Calvin Klein eCommerce using React,
                Redux, Webpack and WebSphere Headless -{" "}
                <a
                  className="link"
                  href="http://www.calvinklein.com"
                  target="_blank"
                >
                  calvinklein.com
                </a>
              </li>
              <li>Focus on page loading optimisation and mobile performance</li>
              <li>
                Cooperated with other developers, designers, and product owners
              </li>
              <li>
                Certified as an Optimizely developer and wrote A/B tests for
                several Clients
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
