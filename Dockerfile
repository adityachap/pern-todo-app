FROM node:lts-alpine3.16

WORKDIR /usr/src/app

COPY ./* .

RUN npm install

EXPOSE 5000
CMD ["node", "index.js"]