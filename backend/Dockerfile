FROM node:18-alpine

WORKDIR /usr/src/api-code-challenge

COPY package*.json ./
COPY prisma ./prisma/ 

RUN npm install
RUN npx prisma migrate

COPY . .

RUN npm run build

EXPOSE 3333

CMD ["npm", "run", "start:prod"]
