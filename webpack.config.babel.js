import path from 'path'
import { dashedCssClassName } from 'css-loader-dashed-class-names'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { HotModuleReplacementPlugin } from 'webpack'


module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './src/index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['env', 'react'] },
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:6]',
              getLocalIdent: dashedCssClassName,
            },
          },
        ],
      },
      {
        test: /\.(svg|jpe?g|png|gif)$/,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/img-[hash:6].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: true,
                },
                optipng: {
                  optimizationLevel: 7,
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/templates/index.html',
      favicon: 'public/images/icons/favicon.ico',
    }),
    new HotModuleReplacementPlugin(),
  ],
}
