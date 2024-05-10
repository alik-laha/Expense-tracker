import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: "https://expense-tracker-46x2.onrender.com", // Your backend server URL
        changeOrigin: true,
        secure: false
      }
    }
  }
});