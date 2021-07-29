FROM node:14.17.3-buster as build

WORKDIR /
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
CMD ["yarn", "start"]

# FROM nginx:1.12-alpine
# COPY --from=build /dist /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]