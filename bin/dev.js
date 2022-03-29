const webpack = require('webpack');
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config');
const nodemon = require('nodemon');
const compiler = webpack(webpackServerConfig);
const clientCompiler = webpack(webpackClientConfig);
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const hmrServer = express();

hmrServer.use(webpackDevMiddleware(clientCompiler, {
  publicPath: webpackClientConfig.output.publicPath,
  serverSideRender: true,
  writeToDisk: true,
  stats: 'errors-only',
}));

hmrServer.use(webpackHotMiddleware(clientCompiler, {
  path: '/static/__webpack_hmr',
}));

hmrServer.listen(3001, () => {
  console.log('HMR server successfully started');
});

compiler.watch({}, (err) => {
  if (err) {
    console.log('Compilation failed: ', err);
  }
  console.log('Compilation was successfully');
});

nodemon({
  script: path.resolve(__dirname, '../dist/server/server.js'),
  watch: [
    path.resolve(__dirname, '../dist/server'),
    path.resolve(__dirname, '../dist/client')
  ]
});
