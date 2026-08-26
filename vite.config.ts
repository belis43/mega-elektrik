import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// Herhangi bir barındırma sağlayıcısına (Vercel, Hostinger, GoDaddy vb.) özel
// ayar içermez. "base: './'" ile üretim çıktısı herhangi bir alt klasörden
// veya kök dizinden servis edilebilir.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
