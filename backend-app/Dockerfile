FROM node:18-alpine AS base   

# Set working directory
WORKDIR src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# The command to run when the container starts
# We use the new 'start' script from package.json
CMD [ "npm", "start" ]