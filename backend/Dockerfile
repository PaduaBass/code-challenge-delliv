FROM node:18-alpine

WORKDIR /usr/src/api-code-challenge

COPY package*.json ./
COPY prisma ./prisma/ 

RUN npm install
RUN npm install prisma
RUN npx prisma migrate
RUN npx prisma generate
RUN npm install prisma --save-dev
RUN npx prisma migrate
RUN npm install @prisma/client

COPY . .

RUN npm run build

EXPOSE 3333

CMD ["npm", "run", "start:prod"]
