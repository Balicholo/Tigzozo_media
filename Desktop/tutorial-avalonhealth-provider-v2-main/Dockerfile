# Use an official Node runtime as the base image
FROM node:20.7.0 as build

# Set the working directory in the container to /app
WORKDIR /app

ENV NEXT_PUBLIC_BRAND_NAME="Tutorial Documentation"
ENV NEXT_PUBLIC_BRAND_URL=https://avalonhealth.cloud
ENV NEXT_PUBLIC_BRAND_DESCRIPTION="Tutorial Documentation"
ENV NEXT_PUBLIC_CONTACT_EMAIL=support@avalonhealth.cloud
ENV NEXT_PUBLIC_SUPPORT_EMAIL=support@avalonhealth.cloud
ENV NEXT_PUBLIC_API_URL=https://api.avalonhealth.cloud
ENV NEXT_PUBLIC_API_STAGING_URL=https://api.avalonhealth.cloud
ENV NEXT_PUBLIC_API_DOCS_URL=https://docs.avalonhealth.cloud

# Copy package.json to the working directory
COPY package*.json ./

# Install pnpm and the application dependencies
RUN npm install -g pnpm && pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN pnpm run build

# Make port 3000 available to the outside world
EXPOSE 3000

# Run the application
CMD ["pnpm", "run", "start"]
