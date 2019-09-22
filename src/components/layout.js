/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Footer from "./footer";

import Header from "./header";

const Layout = ({ children, intl }) => {
  return (
    <>
      <Header siteTitle={intl.formatMessage({ id: "title" })} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default injectIntl(Layout)
