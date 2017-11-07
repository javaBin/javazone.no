const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = './webpack.common.js';

module.exports = webpackMerge(commonConfig, {
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
});