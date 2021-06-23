const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://cryptosmarket.herokuapp.com/',
      secure: false,
      changeOrigin: true,
    })
  );
};