const path = require('path')

class HapTestConfigPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('HapTestConfigPlugin', function (compilation, callback) {
      console.log(`########## 文件输出 ##########`)
      callback()
    })
  }
}

module.exports = {
  // 在此处添加命令行
  cli: {
    devtool: 'source-map',
    enableExtractCss: false,
    removeUxStyle: true
  },
  webpack: {
    resolve: {
      // 后缀名可以自定义为.bar
      extensions: ['.bar'],
      alias: {
        '&': path.resolve(__dirname, 'src')
      }
    },
    module: {
      rules: [{
        test: /\.bar/, use: ['babel-loader']
      }]
    },
    plugins: [new HapTestConfigPlugin()]
  }
}