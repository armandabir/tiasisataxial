# Use official PHP image for Laravel backend
FROM php:8.2-fpm

# Install Node.js for React frontend
RUN apt-get update && apt-get install -y nodejs npm

# Set working directory
WORKDIR /app

# Copy project files into container
COPY . .

# Install Laravel and React dependencies

RUN npm install && npm run build

# Serve Laravel application
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=$PORT"]
