# Stage 1 - Build the React app
FROM node:18-bookworm as build-stage

WORKDIR /app

COPY . .
RUN npm install

RUN npm run build

# Stage 2 - Serve the React app with Nginx
FROM nginx:alpine as deployment-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
