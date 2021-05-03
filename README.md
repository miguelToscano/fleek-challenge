# API Keys Manager

## Getting Started

### Requirements
Docker

### Starting app
1. Clone this repository --> git clone https://github.com/miguelToscano/fleek-challenge.git
2. Change directory -------> cd fleek-challenge
3. Build and run images ---> docker-compose up --build -d

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
