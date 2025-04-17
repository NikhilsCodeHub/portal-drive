# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json if present
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy only backend-relevant files
COPY services.js ./
COPY services/ ./services/

# Expose the port the app runs on
EXPOSE 4000

# Start the main service
CMD ["node", "services.js"]
