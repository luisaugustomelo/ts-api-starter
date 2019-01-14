FROM node:10
#FROM ubuntu:18.04

MAINTAINER Luis Rohten luisaugustomelo@gmail.com

# Caso queira instalar uma dist ubuntu.
# RUN apt-get update -yq \
#    && apt-get install curl gnupg -yq \
#    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
#    && apt-get install nodejs -yq

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]