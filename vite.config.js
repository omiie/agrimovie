import { defineConfig } from 'vite'

export default defineConfig({
  base: '/', // Tambahkan baris ini agar path asset tidak berantakan di Netlify
  // konfigurasi lainnya...
})