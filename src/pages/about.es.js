import React from "react";

import Layout from "../layouts/es";
import SEO from "../components/seo";

const About = (props) => (
  <Layout location={props.location}>
    <SEO title="About" />
    <p>
      This the about page
    </p>
  </Layout>
);

export default About;
