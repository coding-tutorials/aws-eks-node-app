FROM node:13-alpine

ARG HTTP_PORT
ENV HTTP_PORT $HTTP_PORT

RUN mkdir /app-consumer
WORKDIR /app-consumer
COPY . /app-consumer

RUN npm install

EXPOSE "$HTTP_PORT"