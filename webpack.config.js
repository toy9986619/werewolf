const webpack = require('webpack');

module.exports = {
  entry: {
    main: [
      `${__dirname}/src/frontend/main.js`,
      // reload=true，只說當有不能hot reload的情況，就整頁refresh
      'webpack-hot-middleware/client?reload=true'
    ]
  },
  devtool: 'source-map',
  output: {
    path: `${__dirname}/public/js`,
    filename: "app.js",
    publicPath: 'http://localhost:9999/js/'
  },
  resolve: {
    extensions: ['.json', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],

              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-transform-runtime"
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "css-loader",
          {
            loader: "sass-loader",
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    // 提供hot reload功能
    new webpack.HotModuleReplacementPlugin(),
  ],
};
