FROM node:8.9.1-alpine

ENV NODE_ENV production

RUN npm install --production express

COPY . /

CMD [ "node", "app.js"]