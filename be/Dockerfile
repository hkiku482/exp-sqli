FROM node:20 AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build && npx prisma generate

FROM node:20 AS worker
WORKDIR /app

COPY --from=builder /app/.env ./.env
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

EXPOSE 4000

CMD ["node", "dist/src/main"]