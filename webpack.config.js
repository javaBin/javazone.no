var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

var exclude = /node_modules/;
var output = path.join(__dirname, 'dist');
var node_env = process.env.NODE_ENV || 'development';

const babelLoader = 'babel-loader?presets[]=es2015,presets[]=react,plugins[]=transform-react-require,plugins[]=transform-object-assign';
const styleLoader = 'css-loader?sourceMap!autoprefixer-loader?browsers=last 2 versions!less-loader?sourceMap';

module.exports = {
    entry: './app/app.js',

    devtool: 'eval',

    output: {
        filename: 'app.js',
        path: output
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: exclude, loaders: ['react-hot', babelLoader]},
            { test: /\.less$/, exclude: exclude, loader: ExtractTextPlugin.extract('style-loader', styleLoader)},
            { test: /\.(svg|jpg|jpeg|png|pdf|xml|ico|json)$/, exclude: exclude, loader: 'file?name=assets/[name].[ext]'},
            { test: /\.(eot|ttf|woff|woff2)$/, exclude: exclude, loader: 'file?name=assets/fonts/[name].[ext]'}
        ]
    },

    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': `"${node_env}"`}),
        new ExtractTextPlugin('app.css'),
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })
    ],

    devServer: {
        historyApiFallback: true,
        progress: true
    }
};
