FROM node:18.15.0
RUN mkdir -p ./app
WORKDIR /app
COPY package.json /app
COPY ./dist /app
RUN npm install --production
EXPOSE 1461
CMD ["node", "index.js"]