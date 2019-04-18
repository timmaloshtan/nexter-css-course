const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './sass/main.scss',
  output: {
    path: path.resolve(__dirname, 'build'),
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
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true, // webpack@2.x and newer
            },
          },
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
    contentBase: path.join(__dirname, 'build'),
    compress: true,
  },
};
