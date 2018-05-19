module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    // 最好不要进行配置
    extractCSS: !isDev,
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    }
    // 全局有postcss.config.js进行配置，这里不需要进行配置
    // postcss: {}
    // 关闭热重载，只对template内容有效，对样式style无效
    // 根据环境变量生效
    // hotReload: false
    // loaders: {},
    // preloaders: {},
    // postloaders: {}
  }
}