var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
  	colors: true
  },
  proxy: {
    '/proxy/*': {
      target: 'http://dev.buzzfeed.com',
      secure: false,
    },
  },
}).listen(3000, 'dev.buzzfeed.com', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at dev.buzzfeed.com:3000');
});
