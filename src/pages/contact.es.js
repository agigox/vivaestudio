import React from "react";
import { Link } from "gatsby";

import Layout from "../layouts";
import SEO from "../components/seo";

const Contact = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h1>Hi from the contact page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Contact;
