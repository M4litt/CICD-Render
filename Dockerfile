FROM node:18.15.0

#* Setup 
RUN mkdir -p ./app
WORKDIR /app
COPY . /app

#* Build
RUN npm install
RUN npm run build

#* Clean up
RUN rm -rf ./src
RUN rm -rf ./node_modules
RUN rm -rf ./tsconfig.json
RUN rm -rf ./package-lock.json
RUN rm -rf ./README.md
RUN rm -rf ./Dockerfile
RUN rm -rf ./.gitingore

#* Run
RUN npm install --production
EXPOSE 1461
CMD ["node", "./dist/index.js"]