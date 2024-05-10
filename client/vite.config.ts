// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// Load environment variables from .env file

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     sourcemap: true,
//   },
//   server: {
//     proxy: {
//       '/api': {
//         target: process.env.API_URL, // Proxy target URL from environment variable
//         changeOrigin: true,
//         // Optionally, you can use rewrite to remove the '/api' prefix from the request path
//         // rewrite: (path) => path.replace(/^\/api/, '')
//       },
//     },
//   },
// });

import { defineConfig } from 'vite';

import dotenv from 'dotenv';

dotenv.config();
export default defineConfig({
  server: {
    proxy: {
      // Proxy /api requests to http://localhost:8000
      '/api': {
        target: process.env.API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      },
      // Proxy /images requests to another server
      '/images': {
        target: 'http://another-server.com',
        changeOrigin: true
      }
    }
  }
});
