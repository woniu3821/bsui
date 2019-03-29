const path = require("path");
module.exports = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", path.resolve("examples"))
      .set("~", path.resolve("packages"));

    config.module
      .rule("js")
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        return options;
      });
  },
  devServer: {
    //本地开发代理地址
    proxy: {
      "/wec-smmp-bd": {
        target: "http://iwecloud14:31783/", //马拉松开发环境
        // target: "http://172.20.6.71:8080", //zj
        changeOrigin: true
      }
    }
  }
};
