FROM node:latest

WORKDIR /usr/src/reactapp

COPY . . 

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

