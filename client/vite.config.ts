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

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: "https://expense-tracker-46x2.onrender.com/",
        changeOrigin: true
      }
    }
  }
});
