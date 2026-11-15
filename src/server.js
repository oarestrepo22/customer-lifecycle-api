import app from './app.js';
import { config } from './config/env.js';

app.listen(config.port, () => {
  console.log(
    `[${config.environment.toUpperCase()}] ${config.appName} running on port ${config.port}`,
  );
});
