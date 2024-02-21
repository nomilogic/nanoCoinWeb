FROM node:16-alpine as angular-app
WORKDIR '/angular-app'
COPY ./package.json ./
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx:alpine as nginx
EXPOSE 80
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=angular-app /angular-app/dist/nano-coin/ /usr/share/nginx/html/
