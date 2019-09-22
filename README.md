# VIVAESTUDIO
This is the **vivaestudio website**
You can see the demo website from here: https://agigox.github.io/vivaestudio/

## End goal
- **Blazing fast website**
- **Well optimized for on-site SEO (I will request specifics)**
- **Developer friendly, easy to maintain and expand**

## Feature requests
- **Live browser reload after code changes**
- **Want to write CSS in SCSS. Needs to be compiled, autoprefixed and minified**
- Then critical CSS needs to be extracted and injected in compiled html. My current gulpfile.js does that.
Minify and combine JS. I would be happy to use jQuery
- Create a SVG sprite that will contain all icons
- **Webfont generator from a .ttf file (export woff and woff2)**
- Optimize images (JPG, PNG, GIF, SVG). Possibly convert JPG to WebP in the future and generate @2x and @1x images
- Favicon generator: generate and name different favicon and touch-icon and move to root destination folder
- Move root files to destination root folder: for robots.txt, htaccess, etc
- Site will have pretty permalinks and a sitemap.xml will be generated from all URLs in the site
- **About the resulting HTML, it needs to be minified and include the injected CSS**
- **How will markup be added to the site? I am very fluent with HTML5 but never coded a site with React, would love that you add some basic examples: variables, text strings, include partial files, link to other page of the site, add images...**
- Multilanguage support

## Install the project in your local
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

## Use JQuery
In order to use **JQuery**:
- Import jQuery in your component file
```
import $ from 'jquery';
```
- Use it in _componentDidMount()_ method like this:
```
componentDidMount() {
    $("button.hello").click(function(){
        console.log('Hello');
    });
}
```
## Generate sitemap
After building the project, you can find the sitemap in root public folder

