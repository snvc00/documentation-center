FROM node:13.12.0-alpine as builder
LABEL maintainer="S. Valle <snvc00@gmail.com>"

# Install git
RUN apk --no-cache add git

# Create production build
WORKDIR /src
RUN git clone -b docker-autobuild --single-branch https://github.com/snvc00/documentation-center.git
WORKDIR /src/documentation-center
ENV PATH /src/documentation-center/node_modules/.bin:$PATH
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm run build

# Create production environment
FROM nginx:stable-alpine
COPY --from=builder /src/documentation-center/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 
