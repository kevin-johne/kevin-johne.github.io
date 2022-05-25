import * as React from "react";

import { Teaser } from "../modules/teaser/teaser";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Kevin Johne a freelance frontend developer. He does living style guides, responsive websites, and software engineering. Available for contract work"
        />
        <title>Kevin Johne - Freelance Frontend Engineer</title>
      </Helmet>
      <Teaser title="Freelance Frontend Engineer" subtitle="More than 10 years of experience developing successful eCommerce and business critical applications"/>
    </>
  );
};

export default IndexPage;
