import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** Config cuando el cwd es `neura/project` (npm run build desde esta carpeta). */
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
