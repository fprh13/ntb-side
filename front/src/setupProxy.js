const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/user', // 해당 엔드포인트에 대한 프록시 설정
    createProxyMiddleware({
      target: 'http://localhost:8080', // 스프링 백엔드의 공인 IP와 포트
      changeOrigin: true, // 요청 헤더의 Origin을 대상 서버의 주소로 변경
      pathRewrite: {
        '^/user': '', // /user 경로를 제거하여 실제 엔드포인트에 대한 요청을 보냄
      },
    })
  );
};