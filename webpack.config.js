var path=require('path');
var webpack=require('webpack');

var commonsPlugin=new webpack.optimize.CommonsChunkPlugin('shared');
var ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports={
    context:path.resolve('js'),
    entry:{
      about:'./about_page.js',
      home:'./home_page.js',
      contact:'./contact_page.js'
    },
    output:{
        path:path.resolve('build/'),
        publicPath: "/public/assets",
        filename:'[name].js'
    },
    plugins: [
              new ExtractTextPlugin('style.css')],
    devServer: {
        contentBase:'public'
    },
    module:{
        rules:[
            {
                test:/\.es6$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"jshint-loader",
                enforce:'pre'
            },
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','autoprefixer-loader']
                })
            },
            {
                test:/\.less$/,
                exclude:/node_modules/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','autoprefixer-loader','less-loader']
                })
            },
            {
                test:/\.(png|jpg)$/,
                exclude:/node_modules/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },
    resolve:{
        extensions: ['.js','.es6']
    }
}