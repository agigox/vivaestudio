/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby";

import Header from "../components/header"
import Footer from "../components/footer"
import "./index.scss"
import SvgSprite from 'react-svg-sprite';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
    <SvgSprite symbols={[
                {
                  name: 'cloud',
                  svg: `<svg aria-label="vivaestudio" className="logo" enableBackground="new 0 0 310.1 298.36" height="298.36" viewBox="0 0 310.1 298.36" width="310.1" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="m173.07 163.75c-4.9 11.19-11.02 21.73-18.2 31.44-7.43-9.71-13.78-20.29-18.89-31.54 5.94-.66 11.98-.99 18.1-.99 6.43 0 12.76.37 18.99 1.09zm-61.87 72.52c-3.76 2.61-7.66 5.09-11.7 7.42-31.31 18.07-66.13 24.55-99.5 20.76 13.24-31.8 36.63-59.66 68.76-78.2 3.5-2.02 7.04-3.9 10.62-5.63 3.66 10.18 8.27 20.18 13.88 29.88 5.33 9.24 11.34 17.83 17.94 25.77zm117.47-56.09c4.18 1.88 8.31 3.94 12.39 6.2 31.62 17.53 55.1 44.04 69.04 74.6-34.08 5.03-70.01-.68-102.45-18.66-3.53-1.96-6.97-4.03-10.29-6.21 6.84-8.38 13.04-17.49 18.47-27.28 5.16-9.32 9.43-18.91 12.84-28.65zm-106.57-69.79c-.38-4.56-.58-9.18-.58-13.84 0-36.15 11.8-69.55 31.77-96.55 20.92 27.36 33.35 61.56 33.35 98.65 0 4.04-.15 8.05-.44 12.01-10.65-1.92-21.61-2.92-32.82-2.92-10.66 0-21.11.9-31.28 2.65zm109.95 55.67c-20.82-16.33-34.2-41.71-34.2-70.21 0-22.08 8.03-42.29 21.33-57.87 12.33 24.2 19.28 51.59 19.28 80.6 0 3.65-.11 7.27-.33 10.86 25.78 12.63 48.05 31.31 64.97 54.18-5.18.94-10.52 1.42-15.98 1.42-20.78.01-39.9-7.09-55.07-18.98zm-50.41 76.8c6.35 1.94 12.58 4.63 18.58 8.09 19.12 11.04 32.61 28.1 39.45 47.41-27.12-1.42-54.32-9.1-79.44-23.61-3.17-1.83-6.26-3.74-9.28-5.74-23.83 16.01-51.14 25.96-79.4 29.18 1.78-4.96 4.03-9.83 6.76-14.55 21.2-36.71 64.51-52.69 103.36-40.79-.02.01-.02.01-.03.01zm-100.13-79.78c-4.85 4.52-10.29 8.57-16.28 12.03-19.12 11.04-40.64 14.19-60.78 10.46 14.79-22.77 35.04-42.49 60.16-57 3.17-1.83 6.37-3.55 9.6-5.16-1.94-28.63 3.1-57.24 14.44-83.31 3.4 4.02 6.5 8.4 9.22 13.13 21.2 36.71 13.38 82.21-16.35 109.91 0-.03 0-.05-.01-.06z" fill="currentColor" fillRule="evenodd"/>
                        </svg>`
                }
            ]}/>
      
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
