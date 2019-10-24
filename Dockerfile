FROM node:8-alpine as base

FROM base as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production
RUN npm run build

FROM base
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules

COPY . .

EXPOSE 7000

ENTRYPOINT [ "node", "dist/server.js" ]
