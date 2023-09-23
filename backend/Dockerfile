FROM node:18

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

RUN yarn add pg

COPY . .

EXPOSE 1337

CMD ["yarn", "strapi", "develop"]
