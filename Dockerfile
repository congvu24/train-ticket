FROM node:16 as build 


WORKDIR /react-app


COPY package*.json .


RUN yarn install


COPY . .


RUN yarn run build


EXPOSE 3000 

CMD [ "npx", "serve", "build" ]
