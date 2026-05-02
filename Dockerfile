# Stage 1: Build the Vite app
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
# Copy the custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy the built app
COPY --from=build /app/dist /usr/share/nginx/html
# Cloud Run typically expects the container to listen on port 8080
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
