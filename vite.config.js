import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Permite acceder desde la red local
    port: 2000,        // Puerto 2000
  },
});
