const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const ServiceController = require('./src/backend/ServiceController');
const serviceController = new ServiceController(io);
const env = process.env.NODE_ENV;

const PORT = 9999;

// express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// webpack hot reload
if (env === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}


// // spa history mode
// app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

server.listen(PORT, () => console.log(`Example app listen on port ${PORT}!`));
serviceController.init();