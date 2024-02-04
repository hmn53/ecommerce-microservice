# ecommerce-microservice

An ecommerce api with microservice architecture.

## Architecture

The application is designed with a microservices architecture, utilizing an API gateway to consolidate services under a single entry point. The following microservices are deployed:

- **Authentication Service**: Responsible for user authentication.
- **Product Service**: Manages product information.
- **Order Service**: Handles order processing.

Each microservice, along with the API gateway, databases, and RabbitMQ, are containerized using Docker images.

Interactions between the product service and order service employ both synchronous communication via REST and asynchronous communication using the AMQP protocol with RabbitMQ. Two queues are utilized:

- **Orders Queue**: For communicating order updates.
- **Products Queue**: For updating product stock.

The workflow is as follows:

1. The order service calls the product service to retrieve product details and create an order with a pending status.
2. The order service publishes to the product queue to update product stock.
3. The product service consumes the product queue, updates the product stock, and publishes to the order queue to update the order status.

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
