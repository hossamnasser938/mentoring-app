FROM node:18-alpine

WORKDIR /app

COPY ["client/package.json", "client/yarn.lock", "./client/"]

RUN cd client && yarn install

COPY ["server/package.json", "server/yarn.lock", "./server/"]

RUN cd server && yarn install

COPY . .

RUN cd client; yarn build

RUN cd server; yarn build

CMD ["yarn", "start:prod"]


