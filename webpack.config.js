const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './sass/main.scss',
  output: {
    path: path.resolve(__dirname),
    filename: 'css/style.css',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ]
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'url-loader',
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './test.pug',
      filename: 'index.html',
    }),
    new ExtractTextPlugin('css/style.css'),
  ],
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    open: 'firefox',
    port: 8080,
    hot: true,
  },
};
