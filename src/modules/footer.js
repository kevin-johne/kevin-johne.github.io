import React from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
import {Link} from "gatsby"

import {ReactComponent as GithubLogo} from "../images/icons/github.svg";
import {ReactComponent as LinkedInLogo} from "../images/icons/linkedin.svg";
import {ReactComponent as SoundcloudLogo} from "../images/icons/soundcloud.svg";
import {ReactComponent as TwitterLogo} from "../images/icons/twitter.svg";
import {email} from "../setting/data";
import {colorBrand, colorGray75, colorGray93} from "../setting/theme";
import {SocialMediaLink} from "../patterns/icon";
import {InlineLink} from "../patterns/link";
import {Display} from "../patterns/typo";
import {Container} from "../patterns/flex";

const Wrapper = styled.footer`
  background-color: ${colorGray93};

    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background: ${colorBrand};
    }
`;

const FooterInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 50px;
  gap: 0px 80px;
`

const FooterColumn = styled.div`
  flex: 1 1 calc(50% - 40px);
`

const SocialMedia = styled.div`
  margin-top: 1rem;
`

const BookImage = styled(Link)`
  flex: 1 1 100%;
  min-width: 100px;
  margin-right: 20px;
`;

const Copyright = styled.p`
  width: 100%;
  border-top: 1px solid ${colorGray75};
  font-size: 1.2rem;
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  color: ${colorGray75};
`

const Footer = () =>
  <Wrapper>
    <FooterInner>
      <FooterColumn>
        <Display as="h3">Contact</Display>
        <p>
          Do you have a style guide yet? I build a modular library for your web application. I'm currently available for
          contract work. Contact me via <InlineLink as="a" href={`mailto:${ email }`}>e-mail</InlineLink> or social media. <br/>
        </p>
        <SocialMedia>
          <SocialMediaLink socialMedia="github"
             href="https://github.com/kevin-johne" target="_blank"
             title="look up my opensource on github">
            <GithubLogo/>
          </SocialMediaLink>
          <SocialMediaLink socialMedia="linkedin"
             href="https://www.linkedin.com/in/kevin-johne/" target="_blank"
             rel="noreferrer"
             title="look up my working profile">
            <LinkedInLogo/>
          </SocialMediaLink>
          <SocialMediaLink socialMedia="twitter"
             href="https://twitter.com/kevin_johne"
             rel="noreferrer"
             target="_blank" title="follow me on Twitter">
            <TwitterLogo/>
          </SocialMediaLink>
          <SocialMediaLink socialMedia="soundcloud"
             href="https://soundcloud.com/aaml" target="_blank"
             rel="noreferrer"
             title="look up my dj profile aaml">
            <SoundcloudLogo/>
          </SocialMediaLink>
        </SocialMedia>
      </FooterColumn>
      <FooterColumn>
        <Display as="h3">Reading Suggestion</Display>
        <Container>
          <BookImage as="a" href="https://www.hive.co.uk/Product/Malcolm-Gladwell/Blink--The-Power-of-Thinking-Without-Thinking/356328">
            <StaticImage alt="Book Cover" src="../images/content/books/malcolm-gladwell-blink.jpg"/>
          </BookImage>
          <div>
            <InlineLink as="a" href="https://www.hive.co.uk/Product/Malcolm-Gladwell/Blink--The-Power-of-Thinking-Without-Thinking/356328"
               title="Buy Book on hive.co.uk to support local book stores"><b>Blink &mdash; Malcolm Gladwell</b>
            </InlineLink>
            <p>
              Do we need always a lot of information to make the right decision? This book is about what we can learn from
              just a thin slice of information.
            </p>
          </div>
        </Container>
      </FooterColumn>
      <Copyright>
        design, development and content created <br/>
        with ♥ in London by <InlineLink as="a" href={`mailto:${email}`}>Kevin Johne</InlineLink><br/>
        2013 &mdash; 2021 &copy; all rights reserved<br/>
        <br/>
        <InlineLink as="a" href="https://github.com/kevin-johne/kevin-johne.github.io">Source code</InlineLink>
      </Copyright>
    </FooterInner>
  </Wrapper>;

export default Footer;
