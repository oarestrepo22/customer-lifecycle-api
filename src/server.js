import app from './app.js';
import { config } from './config/env.js';
import { sequelize } from './config/database.js';

const startServer = async () => {
  try {
    await sequelize.authenticate();

    console.log('Database connection established.');

    app.listen(config.port, () => {
      console.log(
        `[${config.environment.toUpperCase()}] ${config.appName} running on port ${config.port}`,
      );
    });
  } catch (error) {
    console.error('Failed to start application:', error);
    process.exit(1);
  }
};

startServer();
