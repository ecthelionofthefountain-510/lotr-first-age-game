import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  "*.mp3": {
        "Content-Type": "audio/mpeg"
      }
})
