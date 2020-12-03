FROM node:12

WORKDIR /usr/src/app

COPY ./packages/build .

EXPOSE 8080

CMD ["npm", "start"]