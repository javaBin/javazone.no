var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

var exclude = /node_modules/;
var output = path.join(__dirname, 'dist');

module.exports = {
    entry: './app/app.js',

    devtool: 'source-map',

    output: {
        filename: 'app.js',
        path: output
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: exclude, loader: 'babel-loader' , query: {presets: ['es2015', 'react'], plugins: ['transform-react-require']}},
            { test: /\.less$/, exclude: exclude, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!autoprefixer-loader?browsers=last 2 versions!less-loader?sourceMap')},
            { test: /\.(svg|jpg|png)$/, exclude: exclude, loader: 'file?name=assets/[name].[ext]'},
            { test: /\.(eot|ttf|woff|woff2)$/, exclude: exclude, loader: 'file?name=assets/fonts/[name].[ext]'}
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('app.css'),
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })
    ],

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    }
};
