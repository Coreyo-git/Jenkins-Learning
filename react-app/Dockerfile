# Pulls node and nginx to statically serve front end
FROM node:16 as builder
WORKDIR /app 
COPY react-app/package.json ./
COPY react-app/package-lock.json ./
COPY react-app/ ./
RUN npm i && npm run build

FROM nginx:latest
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from=builder /app/build .

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]


# # pull official base image
# FROM node:latest
 
# WORKDIR /app
# COPY package.json ./
# COPY package-lock.json ./
# COPY ./ ./
# RUN npm i
# EXPOSE 3000
# CMD ["npm", "run", "--openssl-legacy-provider start"] 
# # if openssl-legacy-provider doesn't work, try updating package.json to inlcuse:
# #       "start": "react-scripts --openssl-legacy-provider start"
 
