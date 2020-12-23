FROM node:alpine AS builder
WORKDIR /usr/app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/app/dist .
COPY default.conf /etc/nginx/conf.d