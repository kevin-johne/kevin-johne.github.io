import * as React from "react";

import { Teaser } from "../modules/teaser";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Kevin Johne a freelance frontend developer. He does living style guides, responsive websites, and software engineering. Available for contract work"
        />
        <title>Kevin Johne - Freelance Frontend Developer</title>
      </Helmet>
      <Teaser title="Freelance Frontend Developer" subtitle="More thant 10 years of experience developing software for E-Commerce and task focused management applications."/>
    </>
  );
};

export default IndexPage;
