import swaggerAutogen from 'swagger-autogen';

import { boldText } from '../utils/consoleColors.ts';

const documentConfiguration = {
  info: {
    version: '1.0.0', // by default: '1.0.0'
    title: 'User Auth Service', // by default: 'REST API'
    description:
      'Welcome to the Node.js TypeScript Authentication Service! This project is a simple, powerful, and secure way to handle user authentication, authorization, and account management.', // by default: ''
  },
  servers: [
    {
      url: 'http://localhost:8000', // by default: 'http://localhost:3000'
      description: '', // by default: ''
    },
  ],
  tags: [
    {
      name: 'Welcome', // Tag name
      description: 'A Welcome API Endpoint to Start', // Tag description
    },
    {
      name: 'Auth', // Tag name
      description: 'User Authentication and Authorization API Endpoints', // Tag description
    },
  ],
  components: {}, // by default: empty object
};

export const outputFile = './src/swagger/swaggerDocumentation.json';
export const routes = ['../app.ts'];
swaggerAutogen({ openapi: '3.0.0' })(outputFile, routes, documentConfiguration)
  .then(async () => {
    // run server when swagger done with documention
    return await import('../index.ts');
  })
  .catch((error) => console.log(boldText.RED, error));
