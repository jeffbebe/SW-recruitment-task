FROM node:14
WORKDIR /app
COPY package.json package-lock.json src ./
RUN npm install 
CMD npm start

