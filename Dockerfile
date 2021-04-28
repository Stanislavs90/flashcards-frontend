# base image
FROM node 

# set working directory

WORKDIR /react

# add app
COPY . .

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install



# perform npm build
ARG API_SERVER
ENV REACT_APP_API_SERVER=${API_SERVER}
RUN REACT_APP_API_SERVER=${API_SERVER} \ 
  npm run build

# Uses port which is used by the actual application
EXPOSE 3000


# start app
CMD ["npm", "start"] 

  
