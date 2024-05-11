import { defineConfig } from 'vite';
import dotenv from 'dotenv';
dotenv.config();
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: process.env.API_URL, // Your backend server URL
        changeOrigin: true,
        secure: true
      }
    }
  }

});