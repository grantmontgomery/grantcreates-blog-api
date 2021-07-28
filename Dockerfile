FROM node:14.17.3-buster

WORKDIR /
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn start