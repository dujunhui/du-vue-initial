module.exports = {
  // 配置高于chainWebpack中关于 css loader 的配置
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      }
    }
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    // 跨域请求....待测试
    proxy: {
      "/api": {
        target: "http://192.168.161.70:8078",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api"
        }
      }
    }
  }
};
