FROM node:8

WORKDIR	/usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3000 4200

CMD ["npm", "start"]
