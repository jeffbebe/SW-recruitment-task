FROM node:14
WORKDIR /app
# COPY package.json package-lock.json src ./
COPY . /app
RUN npm install 
EXPOSE 3000
CMD [ "npm", "start" ]

