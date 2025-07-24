import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import modul path dari Node.js

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Membuat alias '@' untuk menunjuk ke direktori 'src'
      // Ini membuat impor lebih bersih dan mudah dikelola
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    // Opsi untuk server development, misalnya port
    port: 3000,
  },
  build: {
    // Opsi untuk build produksi
    outDir: 'dist', // Direktori output build, 'dist' adalah default
    sourcemap: true, // Hasilkan sourcemap untuk debugging di produksi
  },
});
