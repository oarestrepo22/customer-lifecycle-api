# Customer Lifecycle API

REST API for customer management, developed as part of a technical assessment for a Junior Fullstack/Cloud Developer position.

## Tech Stack

- Node.js 24
- Express 5
- JavaScript (ES Modules)
- PostgreSQL (planned)
- Sequelize ORM (planned)
- Docker (planned)

## Prerequisites

- Node.js 24
- npm
- Git

## Getting Started

Clone the repository:

```bash
git clone https://github.com/oarestrepo22/customer-lifecycle-api.git
cd customer-lifecycle-api
```

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

The server currently runs on port `8080` by default.

## Available Scripts

| Command       | Description                              |
| ------------- | ---------------------------------------- |
| `npm run dev` | Starts the server with automatic restart |
| `npm start`   | Starts the server                        |
| `npm test`    | Runs automated tests                     |

## Project Structure

```text
src/
├── app.js
└── server.js
```

- `app.js`: Configures the Express application.
- `server.js`: Starts the HTTP server.

## Development Status

The project is currently under development.

Planned features include:

- Customer creation and retrieval
- PostgreSQL persistence
- DEV and PROD environment configurations
- Input validation and error handling
- Automated tests
- Docker containerization
- Optional AWS deployment

## Security

Environment files and sensitive credentials are excluded from version control through `.gitignore`.

Only fictitious data should be used during development and testing.
