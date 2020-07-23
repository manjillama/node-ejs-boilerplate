# Node EJS complete boilerplate

A complete Node ESJ boilerplate setup with jest, webpack, sass, eslint, prettier, pre-configured.
  
[![](https://github.com/manjillama/node-ejs-boilerplate/workflows/build/badge.svg)](https://github.com/manjillama/node-ejs-boilerplate/actions)
[![](https://img.shields.io/badge/code%20style-airbnb-brightgreen)](https://github.com/airbnb/javascript)

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser. <br/>
Client side JavaScript goes into **client** folder with **index.js** being the entry point. Webpack will watch the index.js file and will trigger hot module replacement whenever user changes the file while the application is still running.

### `yarn start`

Runs the app in the production mode.<br>
Open [http://localhost:8080](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner.<br>

### `yarn build:client`

Builds the client-side JavaScipt for production to the `src/static/dist` folder. The folder will be created is not already exist<br>
It correctly bundles client-side JavaScript in production mode and optimizes the build for the best performance.

The build is minified and your app is ready to be deployed!
