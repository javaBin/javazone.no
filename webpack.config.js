var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var exclude = /node_modules|dist/;

module.exports = {
    entry: {
        javascript: './app/app.js',
        html: './app/index.html'
    },

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: exclude, loader: 'babel-loader' , query: {presets: ['es2015', 'react']}},
            { test: /\.html$/, exclude: exclude, loader: 'file-loader?name=[name].[ext]'},
            { test: /\.less$/, exclude: exclude, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!less-loader?sourceMap')}
        ]
    },

    plugins: [
        new ExtractTextPlugin('app.css')
    ]
};
