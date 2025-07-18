# Use an official node.js runtime as a parent image
FROM node:22-alpine

#set the working directory in the container
RUN apk add --no-cache openssl curl


WORKDIR /app

# Copy the package.json and the package-lock.json to the container
COPY package*.json .

#Install the dependencies
RUN npm install -g nodemon

# Copy the rest of the application code
COPY . . 

#make sure the wait-for script has the necessary permissions
RUN chmod +x ./wait-for.sh
# Expose the port that the app runs on
EXPOSE 5003

CMD ["node", "./src/server.js"]