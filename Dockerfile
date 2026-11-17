FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["sh", "-c", "npx sequelize-cli db:migrate --config src/config/sequelize-cli.cjs --migrations-path migrations && node dist/server.cjs"]