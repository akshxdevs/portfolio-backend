# ---- BASE STAGE ----
    FROM node:18-alpine AS builder

    # Set working directory
    WORKDIR /app
    
    # Install system dependencies
    RUN apk add --no-cache libc6-compat openssl
    
    # Copy package.json and install dependencies
    COPY package.json package-lock.json ./
    RUN npm install --only=production
    
    # Copy the entire source code
    COPY . .
    
    # Ensure Prisma uses the correct binary target
    RUN npx prisma generate --schema=./prisma/schema.prisma
    
    # Compile TypeScript to JavaScript
    RUN npm run build  # This should generate a dist/ directory
    
    # ---- FINAL STAGE ----
    FROM node:18-alpine
    
    WORKDIR /app
    
    # Copy built files from builder stage
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/dist ./dist
    COPY --from=builder /app/prisma ./prisma
    
    # Expose the backend port
    EXPOSE 5000
    
    # Set environment variables (use Docker Compose for overriding)
    ENV PORT=5000
    ENV HOST=0.0.0.0
    
    # Start the backend
    CMD ["node", "dist/index.js"]
    