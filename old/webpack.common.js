const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const exclude = '/node_modules';

module.exports = {
    entry: './app/app.js',
    output: {
        filename: '[hash].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: exclude, 
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                exclude: exclude,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?sourceMap',
                        'postcss-loader?sourceMap',
                        'less-loader?sourceMap'
                    ]
                })
            },
            {
                test: /\.(svg|jpg|jpeg|png|pdf|xml|ico|json|txt)$/,
                exclude: exclude,
                use: 'file-loader'
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                exclude: exclude,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })
    ]
};