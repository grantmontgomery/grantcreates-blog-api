FROM node:14.17.3-buster as build

WORKDIR /
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
CMD ["yarn", "run", "production"]

