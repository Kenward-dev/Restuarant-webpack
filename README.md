# Kenward's Nigerian Restaurant

A simple restaurant homepage created using JavaScript to dynamically render content, bundled with Webpack.

## Features

- Dynamic tabbed browsing for Home, Menu, and Contact sections
- Uses JavaScript DOM manipulation to generate all content
- Styled with CSS, bundled using Webpack

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Mode**
   Start a development server with live reloading:
   ```bash
   npm run start
   ```
   Visit `http://localhost:8080` in your browser.

3. **Production Build**
   Generate a production-ready build in the `dist` folder:
   ```bash
   npm build
   ```

## Webpack Configuration

- **Entry:** `src/index.js`
- **Output:** Bundled files in `dist/`
- **Loaders:** `style-loader` and `css-loader` to bundle CSS
- **Plugin:** `HtmlWebpackPlugin` to link JavaScript and CSS to the HTML template




