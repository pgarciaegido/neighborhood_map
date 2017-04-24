var path = require('path');

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
      // CSS
      {
        // Styles get imported in ./app/js/app.js.
        // Appends css styles right into <HEAD>.
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      }
    ]
  }
};
