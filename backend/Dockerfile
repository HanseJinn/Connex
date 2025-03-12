# Backend Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY backend/package*.json ./
RUN npm install

# Copy backend source code
COPY backend/. .

# Expose backend port
EXPOSE 5000

# Start backend server
CMD ["npm", "start"]