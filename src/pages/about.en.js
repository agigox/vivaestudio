import React from "react";

import Layout from "../layouts/en";
import SEO from "../components/seo";

const About = (props) => (
  <Layout location={props.location}>
    <SEO title="About" />
    <p>
      English version
    </p>
  </Layout>
);

export default About;
