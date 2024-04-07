# WordPress Theme Development Starter Kit

## Introduction

The WordPress Theme Development Starter Kit is designed to be a quick launchpad for developers looking to create custom WordPress themes. It comes equipped with a simple build system using GULP, and is structured with the essential files and a straightforward folder organization. This README provides guidance on how to use this starter kit to jump-start your theme development.

## Setup

1. **npm**
I'm using NPM as my package manager of choice. Make sure to have `Node.js` installed and run `npm install`.

2. **package.json**
Change the `name` and `version` for your requirements

4. **style.css**
Navigate to `style.css` and replace:
- `***INPUT THEME NAME***`
- `***INPUT AUTHOR***`
- `***INPUT VERSION***`

4. **screenshot.png**
Replace `screenshot.png` with an image that represents your theme.
This should be 1200x900 pixels, following WordPress recommendations.

5. **Remove unnecessary files**
All files with `example` in the name can be replaced or removed

## Content

   - The `functions.php` file comes pre-configured with functions to enqueue stylesheets and scripts, maintaining a clean and clear structure. It also includes basic theme setup functionalities like support for post thumbnails and dynamic title tags.
   - `index.php`, `header.php`, and `footer.php` are the fundamental building blocks of any WordPress theme. These files are pre-setup in the repository, providing the most basic structure you need.
   - The `src` folder contains your working SCSS and JavaScript files. When GULP runs, it compiles these files and places them into the `dist` folder, where the minified versions are stored.
   - SCSS is set up as the CSS preprocessor of choice. This allows for more complex styles with variables, nested rules, and more, which then compiles down to standard CSS.

## Development Workflow

- To start working with the theme, clone the repository to your local environment and paste it's content to fresh Wordpress theme folder `(wp-content/themes/yourthemefolder)`
- Make sure to have Node.js installed, then run `npm install` to install all the required dependencies.
- Use `gulp watch` to start the development server and watch for any changes in your SCSS and JS files which will automatically compile and reload your local WordPress environment.

Feel free to extend functionalities, add new files, or modify the structure as needed for your project requirements. This starter kit aims to be flexible and straightforward, giving you a solid foundation for your WordPress theme development.

**Happy Coding!**
