FROM centos:latest

WORKDIR /app
ADD . /app

# install node
RUN yum install -y wget \
	&& wget https://npm.taobao.org/mirrors/node/v8.9.3/node-v8.9.3-linux-x64.tar.xz \
	&& xz -d node-v8.9.3-linux-x64.tar.xz \
	&& tar -xf node-v8.9.3-linux-x64.tar \
	&& ln -s ~/node-v8.9.3-linux-x64/bin/node /usr/bin/node \
	&& -s ~/node-v8.9.3-linux-x64/bin/npm /usr/bin/npm

# install nginx
RUN yum install gcc-c++ \
	&& yum install -y pcre pcre-devel \
	&& yum install -y zlib zlib-devel \
	&& yum install -y openssl openssl-devel \
	&& wget http://nginx.org/download/nginx-1.13.9.tar.gz \
	&& tar -zxvf nginx-1.13.9.tar.gz \
	&& cd nginx-1.13.9 \
	&& ./configure \
	&& make \
	&& make install 

# build
RUN cd ..
	&& npm install
	&& npm run build

COPY dist /usr/share/nginx/html



EXPOSE 80