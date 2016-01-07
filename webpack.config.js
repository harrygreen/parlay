var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'],
      include: path.join(__dirname, 'src')
    }]
  }
};




// var webpack = require('webpack');
// module.exports = {
//     entry: [
//       'webpack/hot/only-dev-server',
//       "./js/app.js"
//     ],
//     output: {
//         path: __dirname + '/build',
//         filename: "bundle.js"
//     },
//     module: {
//         loaders: [
//             { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
//             { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
//             { test: /\.css$/, loader: "style!css" }
//         ]
//     },
//     plugins: [
//       new webpack.NoErrorsPlugin()
//     ]

// };