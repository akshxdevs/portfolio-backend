# Use official Node.js LTS image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Generate Prisma Client for the correct OS
RUN npx prisma generate

# Build the application (if using TypeScript)
RUN npm run build

# Expose the application port
EXPOSE 5000

# Run database migrations and start the app
CMD ["sh", "-c", "node dist/index.js"]
