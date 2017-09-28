var devConfig=require('./webpack.config.js');
var webpackStrip=require('strip-loader');

var stripLoader={
    test:[/\.js$/,/\.es6$/],
    exclude:/node_modules/,
    loader:webpackStrip.loader('console.log')
}

devConfig.module.loaders.push(stripLoader);
module.exports=devConfig;