import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
       //配置src目录
      "@": path.resolve(__dirname, "src"),
       //导入其他目录
      "components": path.resolve(__dirname, "src/components")
    }
  },
  
  server:{
    host:true,
    port:4000
  }

})
