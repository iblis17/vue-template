const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'build.js',
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, 'node_modules')],
    alias: {
      bulma: path.resolve(__dirname, 'node_modules/bulma/css/bulma.css'),
      fa: path.resolve(__dirname, './node_modules/font-awesome/css/font-awesome.min.css')
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)(\?.*)?$/,
        loader: 'url-loader',
      },
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime'],
  },
}
