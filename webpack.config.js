const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  devtool: 'source-map',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index_bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.less'],
    modules: [path.resolve('./src'), 'node_modules']
  },
  devServer: {
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1, modules: true }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        oneOf: [
          {
            exclude: /antd/,
            use: [
              'style-loader',
              'css-loader?modules',
              {
                loader: 'less-loader',
                options: { javascriptEnabled: true }
              }
            ]
          },
          {
            include: /antd/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: () => [require('postcss-flexbugs-fixes')]
                }
              },
              {
                loader: 'less-loader',
                options: { javascriptEnabled: true }
              }
            ]
          }
        ]
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    })
  ]
};
