FROM node:14-alpine
WORKDIR /usr/src/app
COPY package* /usr/src/app/
RUN npm install --production
COPY . /usr/src/app
EXPOSE 3000
CMD [ "node", "index.js" ]