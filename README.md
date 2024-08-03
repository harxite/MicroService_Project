
# Microservices Project

This project is an example application that demonstrates the packaging and deployment of microservices using Docker. The project includes two microservices developed with ASP.NET Core and an API Gateway. MongoDB is used as the database.

## Project Components

- **service1**: The first microservice.
- **service2**: The second microservice.
- **api-gateway**: The API Gateway that manages access to the microservices.
- **mongo**: MongoDB database container.

## Technologies

- Docker
- ASP.NET Core
- MongoDB
- Ocelot (for API Gateway)

## Setup and Running

### Prerequisites

- Docker and Docker Compose must be installed.
- Docker Desktop or Docker Engine should be set up.

### Steps

1. **Clone the Repository**

   ```sh
   git clone https://github.com/harxite/MicroService_Project.git
   cd MicroService_Project
   ```

2. **Start the Services with Docker Compose**

   To build and start all services, run:

   ```sh
   docker-compose up --build
   ```

   This command will build all necessary images and start the containers.

3. **Test the Services**

   - **Service1**: [http://localhost:5001/weatherforecast](http://localhost:5001/weatherforecast)
   - **Service2**: [http://localhost:5002/data](http://localhost:5002/data)
   - **API Gateway**:
     - Endpoint for Service1: [http://localhost:5000/service1/weatherforecast](http://localhost:5000/service1/weatherforecast)
     - Endpoint for Service2: [http://localhost:5000/service2/data](http://localhost:5000/service2/data)

4. **Swagger UI**

   Explore your APIs using Swagger UI:
   - **Service1 Swagger UI**: [http://localhost:5001/swagger](http://localhost:5001/swagger)
   - **Service2 Swagger UI**: [http://localhost:5002/swagger](http://localhost:5002/swagger)
   - **API Gateway Swagger UI**: [http://localhost:5000/swagger](http://localhost:5000/swagger)

## Project Structure

- `service1/`: Source code and Dockerfile for the first microservice.
- `service2/`: Source code and Dockerfile for the second microservice.
- `api-gateway/`: Source code and Dockerfile for the API Gateway.
- `docker-compose.yml`: Docker Compose configuration file.


