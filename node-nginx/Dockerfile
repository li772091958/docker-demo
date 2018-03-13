FROM nginx

WORKDIR /app
ADD . /app

# install node
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - \ 
	&& apt-get install -y nodejs 

# build
RUN cd .. \
	&& npm install \
	&& npm run build

COPY dist /usr/share/nginx/html

EXPOSE 80