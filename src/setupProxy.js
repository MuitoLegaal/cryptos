const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://[::1]:4000',
      headers: {
        "Connection": "keep-alive"
      },
      changeOrigin: true,
    })
  );
};