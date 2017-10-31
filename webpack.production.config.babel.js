import path from 'path'
import { dashedCssClassName } from 'css-loader-dashed-class-names'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { DefinePlugin, NoEmitOnErrorsPlugin } from 'webpack'
import CompressionPlugin from 'compression-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'


module.exports = {
  entry: {
    app: './src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['env', 'react', 'minify'] },
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader',
            options: {
              minimize: true,
            },
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
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new NoEmitOnErrorsPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
  cache: false,
}
