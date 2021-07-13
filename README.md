---
languages:
- nodejs
- javascript
page_type: sample
description: "This is a sample application that you can use to follow along with the Build a Node.js and MongoDB web app in Azure tutorial."
products:
- azure
- azure-app-service
---

# Todo App on the MEAN stack for Azure App Service

This is a [Sails.js](https://sailsjs.com) and Angular application you can use to follow along with the tutorial at [Build a Node.js and MongoDB web app in Azure](https://docs.microsoft.com/azure/app-service/tutorial-nodejs-mongodb-app).

## Features

- The app is generated using the [Sails.js CLI](https://sailsjs.com/documentation/reference/command-line-interface) and serves an API called `Todo`. Other modifications:
    - Views and sockets are disabled (see `.sailsrc`).
    - In `config/production.js`, `sails.config.http.trustProxy` is set to `true`.
- The `client` directory contains an Angular 12 client app, generated using the [Angular CLI](https://angular.io/cli/new).
- To build the Angular client app anytime, run `npm run build` (see `package.json`). The command runs `ng build` and moves the output to the `assets` directory, which Sails.js uses to serve static files.
- To run the app in the development environment, run [`sails lift`](https://sailsjs.com/documentation/reference/command-line-interface/sails-lift) or `node app.js`.
- The `start` script in `package.json` is run by Azure App Service by default to start up the app.

## Get started

[Build a Node.js and MongoDB web app in Azure](https://docs.microsoft.com/azure/app-service/tutorial-nodejs-mongodb-app)

### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
