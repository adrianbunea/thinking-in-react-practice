FROM node

WORKDIR app

RUN npm install --from-lock-file
