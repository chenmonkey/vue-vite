import { defineConfig, loadEnv } from 'vite'
import createVitePlugins from './vite/plugins'
import path from 'path'

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_ENV } = env
  return {
    base: VITE_APP_ENV === 'production' ? '/' : '/',
    plugins: createVitePlugins(env, command === 'build'),
    resolve: {
      alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'),
        // 设置别名
        '@': path.resolve(__dirname, './src')
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    server: {
      // 设置服务启动端口号
      port: 8080,
      host: true,
      // 设置服务启动时自动打开浏览器
      open: true,
      // 配置代理转发
      proxy: {
        '/dev-api': {
          // 实际请求地址
          target: 'http://xxx',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/dev-api/, '')
        }
      }
    }
  }
})