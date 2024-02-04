# ecommerce-microservice

An ecommerce api with microservice architecture.

## Architecture

- The application uses an API gateway to bind all services along a single front, acting as a proxy for the domains in which the `auth`, `order` and `product` microservices are deployed on
- Each microservice, the API gateway, databases and rabbitMQ are deployed as Docker images
- Interactions between `product` service and `order` service uses both synchronous communication using REST and asynchronous AMQP protcol, using RabbitMQ which consists of two queues - orders and products
- `order` service calls `product` service to get product details and created an o order with pending status. It then publishes to product queue to update product stock
- `product` service consumes the product queue, updates the product stock and publishes to order queue to update order status

## Prerequisites

- [Docker](https://www.docker.com) installed with docker-compose enabled
- [Postman](https://www.postman.com/downloads/) (for API testing)

## Installation

### Using docker-compose

- Clone the repo
- Run `docker-compose build`
- Run `docker-compose up`.
- The APIs are running on http://localhost:5000

### Using local configuration

- Clone the repo
- Run `npm install` in each service folder (auth, product, order, api-gateway)
- Configure 3 postgres databases and rabbitmq locally
- Create .env file for each service according to .env.example and provide required variables
- Run all the services using `npm start`
- The APIs are running on http://localhost:5000

## Testing

Import the Postman collection in repo inside Postman. It contains all the API endpoints along with payload description.
