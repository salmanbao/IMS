### For Production mode only
# FROM nginx:stable-alpine

# ## Copy our default nginx config
# COPY ngnix/default.conf /etc/nginx/conf.d/

# ## Remove default nginx website
# RUN rm -rf /usr/share/nginx/html/*

# ## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
# COPY /dist /usr/share/nginx/html

# CMD ["nginx", "-g", "daemon off;"]


## For dev mode only

#docker run -it --rm -p 4200:4200 -v ${PWD}:/app frontend
FROM node:8.16.0
RUN mkdir -p /app
WORKDIR /app
RUN npm install -g @angular/cli
COPY package.json /app/
RUN ["npm","install"]
COPY . /app
EXPOSE 4200
CMD [ "npm", "start" ]
#CMD ng serve --host 0.0.0.0 --port 4200

