FROM node:12-alpine
WORKDIR /usr/src/app
RUN npm install -g serve # Lagalt frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
