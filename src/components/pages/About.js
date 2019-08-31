import React, { Component } from 'react';
import { Helmet } from "react-helmet";

export default class About extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>My seo app</title>
                    <meta name="description" content="testing react helmet" />
                    <meta name="keywords" content="react,seo,helmet" />
                </Helmet>
                This is the about page
            </div>
        )
    }
}
