const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(createProxyMiddleware("/api/log", { target: "http://localhost:8000/api/log" }));
};
