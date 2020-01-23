FROM node:13-alpine

ENV CONSUMER_ADDRESS "http://"

RUN mkdir /app-consumer
WORKDIR /app-consumer
COPY . /app-consumer

RUN npm install