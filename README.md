# Customer Lifecycle API

REST API for customer management, developed as part of a technical assessment for a Junior Fullstack/Cloud Developer position.

## Tech Stack

- Node.js 24
- Express 5
- JavaScript (ES Modules)

Planned technologies:

- PostgreSQL
- Sequelize ORM
- Docker

## Prerequisites

- Node.js 24
- npm
- Git

## Getting Started

### Installation

Clone the repository:

```bash
git clone https://github.com/oarestrepo22/customer-lifecycle-api.git
cd customer-lifecycle-api
```

Install dependencies:

```bash
npm ci
```

### Environment Configuration

Create the environment files from the provided examples:

```bash
cp .env.dev.example .env.development
cp .env.prod.example .env.production
```

The application supports two environments:

| Configuration | Development   | Production     |
| ------------- | ------------- | -------------- |
| NODE_ENV      | development   | production     |
| APP_NAME      | customers-dev | customers-prod |
| PORT          | 8080          | 9090           |

Node.js loads the corresponding environment file using the native `--env-file` option.

### Run in Development

```bash
npm run dev
```

Expected output:

```text
[DEVELOPMENT] customers-dev running on port 8080
```

### Run in Production (Simulated)

```bash
npm run start:prod
```

Expected output:

```text
[PRODUCTION] customers-prod running on port 9090
```

Both environments use the same application code with different configurations.

## Available Scripts

| Command              | Description                                                       |
| -------------------- | ----------------------------------------------------------------- |
| `npm run dev`        | Starts the development server with automatic restart              |
| `npm start`          | Starts the server using externally supplied environment variables |
| `npm run start:prod` | Starts the simulated production environment                       |
| `npm test`           | Runs automated tests once implemented                             |

## Project Structure

```text
src/
├── app.js
├── config/
│   └── env.js
└── server.js
```

- `app.js`: Configures the Express application.
- `config/env.js`: Reads and validates environment variables.
- `server.js`: Starts the HTTP server using the selected configuration.

## Development Status

The project is currently under development.

### Implemented

- Express application setup
- ES Modules configuration
- Development and simulated production environments
- Environment variable validation
- Environment-specific startup scripts

### Planned

- Customer creation and retrieval endpoints
- PostgreSQL persistence
- Sequelize ORM integration
- Input validation and error handling
- Automated tests
- Docker containerization
- Optional AWS deployment

## Security

Environment files and sensitive credentials are excluded from version control through `.gitignore`.

Example environment files are provided to reproduce the application configuration without exposing secrets.

Only fictitious data should be used during development and testing.
