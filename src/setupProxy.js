const { createProxyMiddleware } = require('http-proxy-middleware');
const API = process.env.REACT_APP_API_URL || '';

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: API,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
