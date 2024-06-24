# Install dependencies only when needed
FROM node:18.20.3-alpine3.20 AS deps

# Copy the package.json and package-lock.json files to the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json yarn.lock* package-lock.json* ./

# Install the dependencies
RUN npm install

# Rebuild the source code only when needed
FROM node:18.20.3-alpine3.20 AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Production image, copy all the files and run next
FROM node:18.20.3-alpine3.20 AS runner
WORKDIR /app

ENV NODE_ENV production

# Copy the build output and node_modules from the builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000

# Start Application
CMD ["npm", "start"]
