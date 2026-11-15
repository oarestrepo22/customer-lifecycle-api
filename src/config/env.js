const { NODE_ENV, APP_NAME, PORT } = process.env;

const validEnvironments = ['development', 'production'];

if (!validEnvironments.includes(NODE_ENV)) {
  throw new Error("Invalid NODE_ENV. Expected 'development' or 'production'.");
}

if (!APP_NAME) {
  throw new Error('APP_NAME environment variable is required.');
}

const port = Number(PORT);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('Invalid PORT. Expected an integer between 1 and 65535.');
}

export const config = Object.freeze({
  environment: NODE_ENV,
  appName: APP_NAME,
  port,
});
