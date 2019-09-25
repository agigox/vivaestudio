import React from "react";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {home} from "../data/seo/seo";
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';



const IndexPage = ({ intl, data }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        {...home}
      />
      <h1>
        <FormattedMessage id="hello" />
      </h1>
      <h1>
        <FormattedMessage id="hello" />
      </h1>
      <h2>Diseño web y desarrollo front-end</h2>
        
      <p>Más de 12 años de experiencia diseñando interfaces y desarrollando código front-end. Uso Sketch, WordPress, HTML5, SCSS, jQuery y Gulp, entre otros.</p>
      
      <p>Ahora, al frente de un pequeño equipo de diseñadores/desarrolladores front-end en <a href="https://www.techpump.com" target="_blank" rel="noopener noreferrer">Techpump</a> en Gijón, Asturias.</p>
      
      <p>También me puedes encontrar en <a href="https://dribbble.com/alv" target="_blank" rel="noopener noreferrer">dribbble</a>, <a href="https://twitter.com/alv" target="_blank" rel="noopener noreferrer">Twitter</a>, <a href="https://instagram.com/alvcm" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="https://linkedin.com/alvarocastano" target="_blank" rel="noopener noreferrer">LinkedIn</a> o <a href="https://facebook.com/alvarocastano" target="_blank" rel="noopener noreferrer">Facebook</a>.</p>
      
      <p>Puedes escribirme a alvaro (at) vivaestudio.com</p>
      <p>{intl.formatMessage({ id: "go_page2" })}</p>
      <Img fluid={data.imageOne.childImageSharp.fluid} />
      
    </Layout>
  );
}

export default injectIntl(IndexPage);


export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "one.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
