const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './src/static/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        // Only attempt to run babel on javascript files
        test: /\.(js)$/,
        loader: 'babel-loader',
        // Don't run babel over certain dir, files | using regex
        exclude: /node_modules/,
      },
      {
        test: /\.s?css/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
