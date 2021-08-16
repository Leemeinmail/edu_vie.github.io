module.exports = {
  devServer: {
    host:'localhost',
    proxy: {
      "^/api/": {
        target: "http://test.eclipse-studio.ru/"
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '@/static/css/elements.scss';`
      }
    }
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  }
};