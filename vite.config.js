import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // مهم عشان الـ Assets تبقى paths صحيحة في Netlify
  base: '/',
})
