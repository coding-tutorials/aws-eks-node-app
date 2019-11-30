FROM node:13-alpine

ENV HTTP_PORT 3001

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install

EXPOSE 3001