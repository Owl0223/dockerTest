# Use a specific Node.js version as the base image
FROM node:18-bookworm

# Install nodemon globally
#RUN npm install -g nodemon

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the rest of the application code
COPY . .

# Copy package.json and package-lock.json to the working directory
#COPY package*.json ./

# Install dependencies
RUN npm install

# Expose the port your app runs on
#EXPOSE 4000

CMD ["node", "index.js"]
