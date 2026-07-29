import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/mi-rutina-en-una-app/',
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    fs: {
      // Allow serving files from the project root day folders
      allow: ['.'],
    },
  },
});
