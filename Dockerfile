# Use a specific Node.js version
FROM node:18.19.0

# Install build dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    gcc \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Clear npm cache and remove existing node_modules
RUN npm cache clean --force
RUN rm -rf node_modules

# Install dependencies
RUN npm install --build-from-source
RUN npm rebuild bcrypt --build-from-source

# Bundle app source
COPY . .

# Expose port
EXPOSE 3000

# Start the server
CMD [ "npm", "start" ]