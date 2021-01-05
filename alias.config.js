/**
 * @author Tang
 * @date 2020/7/21
 * @Description:
 * vue-cli4 简化了 webpack 配置，WebStorm 无法识别 alias
 * 本文件作为 WebStorm 识别别名使用
 * WebStorm preferences -> Language & Framework -> JavaScript -> Webpack
 */
const resolve = dir => require('path').join(__dirname, dir)

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }
}
