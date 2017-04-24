var path = require('path');
var webpack = require('webpack');
var PROD = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './app/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // If production, minimize.
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : [],
  module: {
    rules: [
      // BABEL
      {
        // test uses regex for searching .js files
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};

console.log(process.env.NODE_ENV)
