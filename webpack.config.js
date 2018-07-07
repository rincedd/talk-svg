const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: ['webpack-hot-middleware/client', 'react-hot-loader/patch', './index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.md$/,
        use: 'html-loader!markdown-loader?gfm=false'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        include: __dirname
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'raw-loader'],
        include: __dirname
      },
      {
        test: /\.svg$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml',
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.png$/,
        use: 'url-loader?mimetype=image/png',
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.gif$/,
        use: 'url-loader?mimetype=image/gif',
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.jpg$/,
        use: 'url-loader?mimetype=image/jpg',
        include: path.join(__dirname, 'assets')
      }
    ]
  }
};
