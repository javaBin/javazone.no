var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require('path');

var exclude = /node_modules/;
var output = path.join(__dirname, 'dist');
var node_env = process.env.NODE_ENV || 'development';
const isDev = node_env === 'development';

const babelLoader = 'babel-loader?presets[]=es2015,presets[]=react,plugins[]=transform-react-require,plugins[]=transform-object-assign';
const styleLoader = 'css-loader?sourceMap!postcss-loader!less-loader?sourceMap';

const config = {
    entry: './app/app.js',

    resolve: {
        root: [
            path.resolve('./app')
        ]
    },

    output: {
        filename: 'app.js',
        path: output
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: exclude, loader: babelLoader},
            { test: /\.less$/, exclude: exclude, loader: ExtractTextPlugin.extract('style-loader', styleLoader)},
            { test: /\.(svg|jpg|jpeg|png|pdf|xml|ico|json|txt)$/, exclude: exclude, loader: 'file?name=assets/[name].[ext]'},
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
    },

    postcss: function() {
        return [autoprefixer({browsers: ['last 2 versions']})];
    }
};

if (isDev) {
    config.devTool = 'eval';
} else {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config