# Node Typescript Example

A typescript server using Express which has OpenApi validation

# Run

```npm install```

```npm run start```


it creates the deploy/src with the deploy version of the app and executes the index.

# structure 

## Adaptors and controllers

It has the routes of each source and the _controllers_ that have the classes/controllers that should called the respective service. 

## Common

have common classes like utils and configuration of services.

## Models

The classes that represents the resources and other objects that we need to solve the problem.

## Server

 class use to create the REST Service which calls the Openapi.yml and checks it.

## Openapi
representation of the apis that the services for more details check https://www.openapis.org/

# Example 
```
curl --location --request GET 'http://localhost:8080/api/v1/User/' \
--header 'Accept-Charset: application/json' \
```

```curl --location --request POST 'http://localhost:8080/api/v1/User/1' \
--header 'Accept-Charset: application/json' \
--header 'Content-Type: application/json' \
--data-raw '{}'``