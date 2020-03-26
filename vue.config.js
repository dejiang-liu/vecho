const path = require('path')
function resolve(dir) {
    return path.join(__dirname,dir)
}
const projectName = require('./package.json').name
module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    lintOnSave: true,//是否在保存的时候检查
    productionSourceMap: false,
    css: {
        sourceMap: false,
        modules: false,
        loaderOptions: {
            stylus: {
                import: [path.resolve(__dirname, './src/assets/css') + '/index.styl']
            }
        }
    },
    devServer: {
        port: 8002,
        open: true
    },
    configureWebpack: {
        name: projectName,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    }
}
