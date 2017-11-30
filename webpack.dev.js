const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    devtool: 'eval',
    devServer: {
        historyApiFallback: true,
        progress: true,
        port: 8080
    }
});