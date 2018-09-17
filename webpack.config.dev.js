const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Autoprefixer = require('autoprefixer');

module.exports = (env) => {
  const configure = {
    mode: 'development',
    entry: './src/index.jsx',
    devtool: 'inline-source-map', // sourcemap
    output: {
      path: `${__dirname}/build`,
      filename: 'index.js',
    },
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true, // 一切服务都启用gzip 压缩
      proxy: {
        '/': {
          target: env.proxy,
          changeOrigin: true,
        },
      },
      open: true,
      hot: true,
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new HtmlWebpackPlugin({
        title: 'lizi',
        template: './src/index.html',
        favicon: './src/assets/favicon.ico',
      }),
    ],
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['env', 'react'],
                  plugins: [
                    'transform-runtime',
                    'transform-class-properties',
                  ],
                },
              },
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'imgs/',
                },
              },
            },
            {
              test: /\.(le|c)ss$/,
              use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    plugins: () => [Autoprefixer],
                  },
                },
                {
                  loader: 'less-loader',
                  options: {
                    javascriptEnabled: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  };
  return configure;
};
