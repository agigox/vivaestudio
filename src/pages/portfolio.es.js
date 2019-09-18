import React from "react";
import { Link } from "gatsby";

import Layout from "../layouts/es";
import SEO from "../components/seo";

const Portfolio = (props) => (
  <Layout location={props.location}>
    <SEO title="Contact Page" />
    <h1>Hi from the contact page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Portfolio;
