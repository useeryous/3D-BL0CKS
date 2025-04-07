    # Use the official Node.js image as base
    FROM node:16

    # Set working directory
    WORKDIR /app

    # Copy package.json and install dependencies
    COPY package*.json ./
    RUN npm install

    # Copy the rest of the application files
    COPY . .

    # Expose port
    EXPOSE 3000

    # Command to run the application
    CMD ["npm", "start"]

    # Use a Node.js image to build the app
    FROM node:16 as builder

    WORKDIR /app
    
    COPY 3d-bl0cks/package*.json ./
    RUN npm install
    
    COPY 3d-bl0cks .
    RUN npm run build
    
    # Use a lightweight Nginx image to serve the app
    FROM nginx:stable-alpine
    
    COPY --from=builder /app/dist /usr/share/nginx/html
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]