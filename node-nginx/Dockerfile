FROM nginx

FROM node:slim

WORKDIR /app
ADD . /app

# build
RUN npm install \
	&& npm run build

COPY dist /usr/share/nginx/html

EXPOSE 80