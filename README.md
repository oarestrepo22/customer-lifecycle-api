# Customer Lifecycle API

REST API developed with Node.js 24, Express 5, PostgreSQL, Sequelize and Docker for the Junior Fullstack/Cloud technical assessment.

The application allows customer registration and retrieval, with separate development and simulated production configurations.

## Requirements

- Node.js 24 and npm
- Docker Desktop with Docker Compose
- Git

PostgreSQL runs inside Docker, so no local installation is required.

## Installation

Clone the repository:

```bash
git clone https://github.com/oarestrepo22/customer-lifecycle-api.git
cd customer-lifecycle-api
```

Create the environment files:

```bash
cp .env.dev.example .env.development
cp .env.prod.example .env.production
```

The example files contain the configuration required for local execution. Use development credentials only.

## Build

Install dependencies and generate the executable application artifact:

```bash
npm ci
npm run build
```

The resulting file is:

```text
dist/server.cjs
```

This artifact can be executed using Node.js 24.

Build the Docker image:

```bash
npm run docker:build
```

The same Docker image is used in both environments.

## Run in Development (DEV)

```bash
npm run docker:dev
```

The application starts with:

- Application name: `customers-dev`
- Port: `8080`
- Database: `customers_dev`

API URL:

```text
http://localhost:8080/api/customers
```

## Run in Production (Simulated)

```bash
npm run docker:prod
```

The application starts with:

- Application name: `customers-prod`
- Port: `9090`
- Database: `customers_prod`

API URL:

```text
http://localhost:9090/api/customers
```

Docker uses the same application image without rebuilding it. The configuration determines which environment runs.

The current setup switches between DEV and PROD rather than running both API environments simultaneously.

## Database Setup

Docker automatically:

1. Starts PostgreSQL.
2. Creates the `customers_dev` and `customers_prod` databases on first initialization.
3. Runs pending Sequelize migrations for the selected environment.
4. Starts the API.

No manual database creation or migration commands are required when using Docker.

## API Endpoints

### Create Customer

`POST /api/customers`

Example:

```bash
curl -X POST http://localhost:8080/api/customers \
  -H "Content-Type: application/json" \
  -d '{"name":"Juan Perez","email":"juan@example.com"}'
```

Successful response: `201 Created`

```json
{
  "message": "Customer created successfully.",
  "id": "<generated-customer-id>"
}
```

### List Customers

`GET /api/customers`

Example:

```bash
curl http://localhost:8080/api/customers
```

Successful response: `200 OK`

Returns the customers stored in the selected environment database.

To test simulated production, replace port `8080` with `9090`.

## Run the Built Artifact Without Docker

The following commands execute the same bundled application using the selected environment file:

```bash
npm run start:dev
```

```bash
npm run start:prod
```

These commands require an accessible PostgreSQL database with its schema already initialized. Database initialization is automated when using Docker Compose.

## Stop the Application

```bash
docker compose --env-file .env.development down
```

This stops and removes the project containers while preserving PostgreSQL data.

## Security

Environment files are excluded from version control through `.gitignore`. Use fictitious customer data and do not commit real credentials.

The production environment is simulated locally and is not intended for public deployment.
