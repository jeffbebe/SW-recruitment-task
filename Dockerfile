ARG IMAGE=node:13.13-alpine
FROM $IMAGE as builder

WORKDIR /app

RUN apk add --no-cache bash curl git py-pip make && \
  curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | sh && \
  npm install node-dev -g && npm install typescript -g && npm install @types/node --save-dev && npm cache clean --force

FROM builder

COPY .npmr[c] package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build
COPY .env.dist ./build/.env.dist
COPY .env.dist ./build/.env

