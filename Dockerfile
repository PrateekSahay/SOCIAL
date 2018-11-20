# Use an official Python runtime as a parent image
FROM node

# Set the working directory to /app
RUN mkdir /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package.json /app/ 
COPY package-lock.json /app
RUN npm install

# Install any needed packages specified in requirements.txt
#RUN npm install
Run npm i @angular/cli
COPY . /app

# Make port 80 available to the world outside this container
EXPOSE 4200

#RUN ng serve
CMD [ "npm", "start" ]