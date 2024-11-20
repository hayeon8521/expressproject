const { defineConfig } = require('@vue/cli-service')
const serverOrigin = 'http://localhost:3000';

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    proxy : {
      //'^/api' 정규표현식 ^의미 = /api 로 시작하는 모든 url에대해 대처하겠다
      '^/api' : {
        target : serverOrigin,  //변경하고자하는 오리진 http://localhost:3000
        changeOrigin: true, //적용 여부
        ws : false, //웹 소켓 사용 여부(지금 필요없어서 의도치않은 통신을 안하기 위해서)
        pathRewrite : {'^/api' : '/'} // /api 로들어오는 얘들을 / 로 바꿔서 통신하려고함
      }
    }
  }
})
