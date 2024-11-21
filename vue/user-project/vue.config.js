const { defineConfig } = require('@vue/cli-service')
const serverOrigin = 'http://localhost:3000';

module.exports = defineConfig({
  transpileDependencies: true,
  //cors => proxy setting
  devServer : {
    port : 8099,  //뷰가 가지는 포트를 변경해야한다면...
    proxy : {
      '^/api' : {
        target : serverOrigin,
        changeOrigin: true,
        ws : false,
        pathRewrite : {'^/api' : '/'}
      }
    }
  }
})
