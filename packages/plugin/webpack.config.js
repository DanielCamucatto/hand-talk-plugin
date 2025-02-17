const path = require('path');

module.exports = {
  mode: 'production', // Use 'production' para o build final
  entry: './src/plugin.ts',
  output: {
    filename: 'plugin.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  target: 'web',
};