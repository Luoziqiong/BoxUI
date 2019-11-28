
module.exports = {
    // 修改 src 为 examples
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        },
        // components:{
        //     entry: 'examples/index.js',
        //     template: 'public/index.html',
        //     filename: 'index.html'
        // }
    },
    devServer: {
        // port: 3080,
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // clientLogLevel: 'none',
        hot: true,
        proxy: undefined,
    },
    // chainWebpack: config => {
    //     config.module.rule('vue').include.add('/packages').end();
    //     config.module.rule('less').include.add('/packages').end();
    //     config.module.rule('js').include.add('/packages').end();
    // },
    outputDir: process.env.OUTPUT_DIR,
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
}