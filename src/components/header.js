import React, { Component } from 'react'
import "./header.scss";
import { Link } from "gatsby";
import SelectLanguage from './selectLanguage';



export default class Header extends Component {  
  render() {
    const {siteTitle} = this.props;
    return (
      <div className="grid-container">
        <div className="grid-item">
          <h1>
            <svg>
                <use xlinkHref="#cloud"></use>
            </svg> {siteTitle}
          </h1>
        </div>
        <div className="grid-item">
          <nav>
            <ul>
              <li><Link activeClassName="active" to="/">Home</Link></li>    
              <li><Link activeClassName="active" to="/about/">About</Link></li>
              <li><Link activeClassName="active" to="/contact/">Contact</Link></li>
              <li><Link activeClassName="active" to="/legal/">Legal</Link></li>
              <li><Link activeClassName="active" to="/portfolio/">Portfolio</Link></li>
            </ul>
          </nav>
        </div>
        <SelectLanguage langs={this.props.langs} />
      </div>
    )
  }
}
