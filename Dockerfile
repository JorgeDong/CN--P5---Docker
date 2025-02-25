# creamos una variable
ARG PORT=8080
# label para agregar metadatos
LABEL autor="Luis David Gallegos Godoy & Jorge Alejandro Dong Llauger"
FROM node:12-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . . 
# exponemos el puerto
EXPOSE ${PORT}
CMD ["node","index.js"]