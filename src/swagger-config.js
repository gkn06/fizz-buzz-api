const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'FizzBuzz API',
      version: '1.0.0',
      description: 'API docs',
    },
  },
  apis: ['src/shared/swagger.yaml'],
};

const specs = swaggerJSDoc(options);

const setup = (app) => app.use('/swagger-ui', express.static('node_modules/swagger-ui-dist/', {index: false}), swaggerUi.serve, swaggerUi.setup(specs));

module.exports = setup;