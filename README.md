# VIVAESTUDIO
This is the **vivaestudio website**
You can see the demo website from here: https://agigox.github.io/vivaestudio/

## End goal
- Blazing fast website
- Well optimized for on-site SEO (I will request specifics)
- Developer friendly, easy to maintain and expand

## Feature requests
- Live browser reload after code changes
- Want to write CSS in SCSS. Needs to be compiled, autoprefixed and minified
- Then critical CSS needs to be extracted and injected in compiled html. My current gulpfile.js does that.
Minify and combine JS. I would be happy to use jQuery
- Create a SVG sprite that will contain all icons
- Webfont generator from a .ttf file (export woff and woff2)
- Optimize images (JPG, PNG, GIF, SVG). Possibly convert JPG to WebP in the future and generate @2x and @1x images
- Favicon generator: generate and name different favicon and touch-icon and move to root destination folder
- Move root files to destination root folder: for robots.txt, htaccess, etc
- Site will have pretty permalinks and a sitemap.xml will be generated from all URLs in the site
- About the resulting HTML, it needs to be minified and include the injected CSS
- How will markup be added to the site? I am very fluent with HTML5 but never coded a site with React, would love that you add some basic examples: variables, text strings, include partial files, link to other page of the site, add images...
- Multilanguage support

## How to maintain this website

### Install the project in your local
- The first thing to do is to clone the project, install git, open the command line and type:
```
git clone https://github.com/agigox/vivaestudio.git
```
To start developing the project in your local, type:
```
npm run start
```
And navigate to http://localhost:3000/
There is a **Live browser reload after code changes** (try to change the code and you will see changes in the browser)
- To build the project, lunch the command:
```
npm run build
```
Copy the generated build folder into your host provider and Enjoy!


### Adding new page (component) and route
- To add a new page with a given route, for example, **/example**, you need to add a new file **example.js** and the scss file that style this component **/example.scss** in the **src/pages**:
```
import React from "react";
// ...
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

```
The **SEO** component is used for search engine optimization 
To get access to this page from a link add this tag (do not forget to import Link)
```
import { Link } from 'react-router-dom';
// In your JSX insert your link
<Link to="/route-example/">Route Example</Link>

### Existing routes
For the moment we have these routes: **/about**, **/legal**, **/contact** and **/portfolio**

