var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'] },
      { test: /(\.scss)|(\.sass)$/, loader: 'style!css?sourceMap!sass?outputStyle=expanded&sourceMap&sourceMapContents' },
    ]
  },
  resolve: ["", ".js"]
};
