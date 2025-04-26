# Step 1: Use official Node.js image as base
FROM node:16 AS build

# Step 2: Set working directory
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Build the application (if needed, e.g., for React frontend or any build step)
# RUN npm run build (Uncomment if your app has a build step)

# Step 7: Expose the port that the app will run on
EXPOSE 3000

# Step 8: Command to run the app (change accordingly if you have a different entry point)
CMD [ "npm", "start" ]