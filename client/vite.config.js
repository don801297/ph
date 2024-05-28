import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: true,
    
  },
  
  plugins: [react()],
  define:{
    'process.env.VITE' :JSON.stringify(process.env.VITE_KEY)
  },
  
});