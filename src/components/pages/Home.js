import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Diseño web y desarrollo front-end</h2>
        
                <p>Más de 12 años de experiencia diseñando interfaces y desarrollando código front-end. Uso Sketch, WordPress, HTML5, SCSS, jQuery y Gulp, entre otros.</p>
                
                <p>Ahora, al frente de un pequeño equipo de diseñadores/desarrolladores front-end en 
                <Link href="https://www.techpump.com" target="_blank" rel="noopener">Techpump</Link> 
                en Gijón, Asturias.</p>
                
                <p>También me puedes encontrar en 
                    <Link href="https://dribbble.com/alv" target="_blank" rel="noopener">dribbble</Link> <Link href="https://twitter.com/alv" target="_blank" rel="noopener">Twitter</Link>, 
                    <Link href="https://instagram.com/alvcm" target="_blank" rel="noopener">Instagram</Link>, <Link href="https://linkedin.com/alvarocastano" target="_blank" rel="noopener">LinkedIn</Link> o <Link href="https://facebook.com/alvarocastano" target="_blank" rel="noopener">Facebook</Link>.</p>
                
                <p>Puedes escribirme a alvaro (at) vivaestudio.com</p>
            </div>
        )
    }
}
