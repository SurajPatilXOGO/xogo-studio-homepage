import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4255,
    strictPort: true,
    allowedHosts: ["broiler-retiree-zigzagged.ngrok-free.dev"],
  },
  preview: {
    port: 4255,
    strictPort: true,
  },
})