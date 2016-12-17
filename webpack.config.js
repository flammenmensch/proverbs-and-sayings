const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: [ 'babel-polyfill', './client/js/index.js' ],
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
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(ttf|eot|woff|jpe?g|svg|png)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { context: 'public', from: '**/*' }
    ])
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
