# Use official PHP image for Laravel backend
FROM php:8.2-fpm

# Install Node.js for React frontend
RUN apt-get update && apt-get install -y nodejs npm

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=$PORT"]

