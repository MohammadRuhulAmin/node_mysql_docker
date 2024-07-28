FROM node:latest
MAINTAINER  "ruhul@ba-systems.com"
RUN apt-get update
WORKDIR /var/opt
COPY package.json .
RUN npm install
RUN git@github.com:MohammadRuhulAmin/node_mysql_docker.git .
EXPOSE 3000
CMD ["node","server.js"]