import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
export default defineConfig({
    build: {
    outDir: 'public/build',
    // ...
  },
    plugins: [
        laravel({
            input: ['resources/css/index.css', 'resources/js/index.jsx'],
            refresh: true,
        }),
       
        

        
      react(),
    ],

    server: {
        host: '0.0.0.0', // Use localhost or your machine's IP address
        port: 5173, // Ensure the port matches your setup
        hmr: {
<<<<<<< HEAD
            host: '192.168.1.50', // Use localhost for HMR
=======
<<<<<<< HEAD
            host: '172.28.84.80', // Use localhost for HMR
=======
            host: '192.168.125.184', // Use localhost for HMR
>>>>>>> f73b07ba4947a5132b566f01ab8c48c233e614a4
>>>>>>> 4b621c431797287261209f57315eea87a61e3b73
        },
        cors: {
            origin: '*', // Allow all origins (adjust as needed)
            methods: ['GET', 'POST'],
            headers: ['Content-Type', 'Authorization']
          }
      
    },
});
