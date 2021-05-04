# API Keys Manager

## Getting Started

### Requirements
Docker

## Starting the app
1. Clone this repository `git clone https://github.com/miguelToscano/fleek-challenge.git`
2. Change directory `cd fleek-challenge`
3. Make sure ports :3000, :5001, :8080 and :27017 are not being used as we're going to run our containers on these ports.
4. Build and run containers `docker-compose up --build -d`

You can access the web client from `http://localhost/3000` by using email: `admin@fleek.us` and password: `fleek` as credentials.

## Endpoints

### Postman Collection
https://www.getpostman.com/collections/2b668f8971b048201542

### POST `http://localhost:8080/v1/users`
Creates a user by providing email and password.

### POST `http://localhost:8080/v1/users/login`
Returns authorization when providing valid credentials.

### GET `http://localhost:8080/v1/apiKeys` (Authentication required)
Retrieves a list with all API keys with their status, creation date and requested IPFS node paths.

### POST `http://localhost:8080/v1/apiKeys` (Authentication required)
Creates a new active API key

### POST `http://localhost:8080/v1/apiKeys/:id/disable` (Authentication required)
Disables API key for future requests.

### GET `http://localhost:8080/v1/apiKeys/:id` (Authentication required)
Retrieves a single API key with it's status, creation date and requested IPFS node paths

## IPFS HTTP API

This service also works as a proxy to an IPFS node running on port :5001 by using its HTTP API. See reference https://docs.ipfs.io/reference/http/api/
By simply using the same host and port you can access to the same endpoints as the IPFS HTTP API.

For example
### POST `http://localhost:8080/api/v0/version`

## Written Questions

How would you improve this assignment for a production ready solution (e.g., security,
deployment)?

- Environment variables
- Tests
- Database credentials
- Every container is accesible by anyone with access to localhost

