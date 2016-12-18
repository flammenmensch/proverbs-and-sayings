const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanupWebpackPlugin = require('webpack-cleanup-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: [ 'normalize.css', 'babel-polyfill', 'whatwg-fetch', './client/js/index.js' ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextWebpackPlugin.extract('style-loader', 'css-loader?importLoaders=1!postcss-loader!sass-loader')
      },
      {
        test: /\.(ttf|eot|otf|woff|jpe?g|svg|png)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new CleanupWebpackPlugin(),
    new ExtractTextWebpackPlugin('styles.css'),
    new CopyWebpackPlugin([ { context: 'public', from: '**/*' } ])
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins = config.plugins.concat(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  );

} else {
  config.devtool = 'sourcemap';
}

module.exports = config;
