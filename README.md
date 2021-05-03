# Exchange rates

[![Build Status](https://circleci.com/gh/raparicio6/exchange-rates-api-node.svg?style=shield)](https://circleci.com/gh/raparicio6/exchange-rates-api-node)
[![Coverage Status](https://coveralls.io/repos/github/raparicio6/exchange-rates-api-node/badge.svg?branch=master)](https://coveralls.io/github/raparicio6/exchange-rates-api-node?branch=master)

## Getting Started

### Installing node

Get the latest version of node from the [official website](https://nodejs.org/) or using [nvm](https://github.com/creationix/nvm).  
Nvm approach is preferred.

Install dependencies by running `npm i`.

Create a *.env* file at the root of the project and add:  
`FIXER_API_BASE_URL=http://data.fixer.io/api`  
`FIXER_API_KEY=<your Fixer api key>`  
`API_KEY=<secret api key>`

### Database configuration

Before running the app, make sure you have [mongoDB installed](https://docs.mongodb.com/manual/administration/install-community/) and running.

Then, set in `.env` some variables:  
`DB_NAME_DEV=<database name>`  
`DB_NAME_TEST=<testing database name>`  
`DB_HOST=<database host>`  
Should be `localhost` by default  
`DB_PORT=<database port>`  
Should be `27017` by default

### Starting app

We have two ways to start the app. To start it in production mode run `npm start` in the root path of the project. To start it in development mode (nodemon) run `npm run start-dev`. Then access the app at **localhost:port**. The port is logged in the console where you run the start script.  
Also, you can start the app in production mode using [docker-compose](https://docs.docker.com/compose/install/). You just have to run `docker-compose up`.

## Development

### Environments

By default, the environment will be **development**, but you can easily change it using the **NODE_ENV** environmental variable.

### Environment variables

[Dotenv](https://www.npmjs.com/package/dotenv) is used for managing environment variables. They are stored in the `/.env` file. Take into account that the variables defined in the `bashrc` are not overrided.

The environment variables should be added to the `.env` file in the form of `NAME=VALUE`, as the following example:

```
PORT=8081
CLIENTS_API=http://api.clients.example.org/
```

**Remember not to push nor commit the `.env` file.**

### Testing

In order to execute the tests run `npm test`.  
[Jest](https://jestjs.io/) was used as the testing framework.

### Documentation

Documentation will be served at `/documentation`. It is suggested to check it if you want to execute any request since it contains a **Try Out** option, which is much more comfortable than using other tools such as Postman.

## Deploy

### AWS

This app was deployed using [AWS](https://aws.amazon.com/). The base url is [http://ec2-3-14-15-102.us-east-2.compute.amazonaws.com:8080/](http://ec2-3-14-15-102.us-east-2.compute.amazonaws.com:8080/).

## Built With

* [hapi](https://hapi.dev/)
* [mongoDB](https://www.mongodb.com/)
* [CircleCI](https://circleci.com/)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Run the tests (`npm test`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create new Pull Request

## About

This project was written and is maintained by [Rodrigo Aparicio](https://github.com/raparicio6).

## License

This project is licensed under the MIT License.
