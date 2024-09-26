import * as React from "react";

import { Teaser } from "../modules/teaser/teaser";
import { Helmet } from "react-helmet";

const IndexPage = () => {
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
      />
    </>
  );
};

export default IndexPage;
