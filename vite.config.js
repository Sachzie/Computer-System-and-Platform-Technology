import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Computer-System-and-Platform-Technology/',
  plugins: [react()],
})
