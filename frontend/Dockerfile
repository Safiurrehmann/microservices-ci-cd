# Use Nginx for serving static files
FROM nginx:alpine

# Clear default content
RUN rm -rf /usr/share/nginx/html/*

# Copy your static site into the default nginx public folder
COPY . /usr/share/nginx/html

# Expose port (Nginx default)
EXPOSE 80
