FROM node:9

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

ENV NODE_ENV production
