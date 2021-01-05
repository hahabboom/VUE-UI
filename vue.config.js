/**
 * @author Tang
 * @date 2020/7/21
 * @Description
 * 相关配置学习参考：
 * https://cli.vuejs.org/zh/config/
 * https://juejin.im/post/5e944010f265da47aa3f68db
 * https://www.jianshu.com/p/b358a91bdf2d
 */
const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  /** publicPath
   * 部署应用包时的基本 url。
   * 默认 cli 会假设应用被部署在一个域名的根路径上：http://www.app.com/；如果部署在子路径：http://www.app.com/path/ 则需修改 publicPath: '/path/'。
   * 设置为空字符串或相对路径 './' 则可以将包部署在任意路径。
   * 静态资源处理：https://blog.csdn.net/qappleh/article/details/103005111 https://cli.vuejs.org/zh/guide/html-and-static-assets.html
   **/
  publicPath: '/',
  outputDir: 'dist', // build 输出文件目录
  productionSourceMap: false, // build 不生成 map 文件
  chainWebpack: config => { // 修改内部 webpack 配置
    config.resolve.alias // 路径别名
      .set('@', resolve('src'))
    // .set('@assets', resolve('src/assets'))
    // .set('@components', resolve('src/components'))
    // .set('@views', resolve('src/views'))
    // .set('@store', resolve('src/store'))
    config // 修改插件选项 https://github.com/jantimon/html-webpack-plugin#options
      .plugin('html')
      .tap(args => {
        args[0].title = '综合气象观测业务运行信息化平台'
        return args
      })
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  css: {
    sourceMap: false, // 开启后构建减慢，但可以查看源文件路径
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/index.scss";'
      }
    }
  },
  devServer: {
    host: '222.18.149.110',
    port: 8080,
    open: true, // 自动打开浏览器
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    proxy: { // 可配置多个代理
      '/api': {
        target: process.env.VUE_APP_PROXY_TARGET, // 代理目标
        changeOrigin: true, // 开发环境跨域，在生产环境中还是由后端处理
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
