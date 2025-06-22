# Stage 1: Build the React application
FROM node:18-alpine AS build

WORKDIR /app

# Copy package manifests
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# The VITE_BACKEND_API will be passed as a build argument from docker-compose
# It's important to use an ARG to make it available during the build process
ARG VITE_BACKEND_API
ENV VITE_BACKEND_API=$VITE_BACKEND_API

# Build the application
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:stable-alpine

# Copy the build output from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration
# We will create this file in the next step
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]