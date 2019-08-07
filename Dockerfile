FROM node:10 as build
RUN mkdir -p /build/app
WORKDIR /build/app
COPY . /build/app/
ARG NODE_ENV=development
RUN npm install
RUN npm run build
RUN rm -rf node_modules

ARG NODE_ENV=production
FROM node:10
COPY --from=build /build/app /srv/app
WORKDIR /srv/app
RUN npm install
CMD ["node", "./dist/server/server.js"]
