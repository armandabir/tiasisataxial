import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/index.css', 'resources/js/index.jsx'],
            refresh: true,
        }),
      react(),
    ],
    server: {
        hmr: {
            overlay: true,
        },
        watch: {
            usePolling: true,
        },
    },
    build: {
        sourcemap: true, // Enable source maps
    },
});
