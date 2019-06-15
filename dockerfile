FROM node:10-alpine

RUN npm install --global npm@6.9.0

ENV HOME=/home/app

COPY package.json $HOME/library/

WORKDIR $HOME/library
RUN npm install 

COPY . $HOME/library

ENV NODE_ENV=production

CMD ["npm", "start"]
