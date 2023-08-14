FROM node:18.15.0

#* Setup 
RUN mkdir -p ./app
RUN shopt -s extglob
WORKDIR /app
COPY . /app

#* Build
RUN npm install
RUN npm run build

#* Clean up
RUN rm -rf !("dist"|".env"|"package.json")

#* Run
RUN npm install --production
EXPOSE 1461
CMD ["node", "./dist/index.js"]