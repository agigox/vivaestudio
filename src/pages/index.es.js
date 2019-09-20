import React from "react";
import {home} from "../data/seo/seo";
import Layout from "../layouts";
import SEO from "../components/seo";
/*


import Image from "../components/image";
*/

const IndexPage = () => {
  
  return (
    <Layout>
      <SEO {...home}/>
      <h2>Diseño web y desarrollo front-end</h2>
        
      <p>Más de 12 años de experiencia diseñando interfaces y desarrollando código front-end. Uso Sketch, WordPress, HTML5, SCSS, jQuery y Gulp, entre otros.</p>
      
      <p>Ahora, al frente de un pequeño equipo de diseñadores/desarrolladores front-end en <a href="https://www.techpump.com" target="_blank" rel="noopener noreferrer">Techpump</a> en Gijón, Asturias.</p>
      
      <p>También me puedes encontrar en <a href="https://dribbble.com/alv" target="_blank" rel="noopener noreferrer">dribbble</a>, <a href="https://twitter.com/alv" target="_blank" rel="noopener noreferrer">Twitter</a>, <a href="https://instagram.com/alvcm" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="https://linkedin.com/alvarocastano" target="_blank" rel="noopener noreferrer">LinkedIn</a> o <a href="https://facebook.com/alvarocastano" target="_blank" rel="noopener noreferrer">Facebook</a>.</p>
      
      <p>Puedes escribirme a alvaro (at) vivaestudio.com</p>
    </Layout>
  )
};
/*
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people 11</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 3</Link>
  </Layout>
)
*/

export default IndexPage
