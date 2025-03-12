# Use a multi-stage build to create separate images for frontend and backend

# Stage 1: Build frontend
FROM node:18 AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Build backend
FROM node:18 AS backend-builder
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./
RUN npm run build

# Stage 3: Final stage
FROM node:18
WORKDIR /app

# Copy built frontend
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

# Copy backend
COPY --from=backend-builder /app/backend ./

# Install dependencies for both frontend and backend
RUN npm install --prefix frontend
RUN npm install --prefix backend

# Expose ports
EXPOSE 3000
EXPOSE 5000

# Start both frontend and backend
CMD ["sh", "-c", "npm run dev --prefix frontend & npm run dev --prefix backend"]
