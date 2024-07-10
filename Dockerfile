# Common build stage
FROM node:20

COPY . ./app

WORKDIR /app

RUN npm install

EXPOSE 3000

ENV NODE_ENV development

CMD ["npm", "run", "dev"]

