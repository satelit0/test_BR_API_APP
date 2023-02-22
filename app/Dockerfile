FROM node:16

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package.json /usr/app

RUN npm install

COPY . /usr/app

RUN npm run build --prod

EXPOSE 4200

CMD [ "npm", "run", "start"]