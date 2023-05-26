const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // Add your loaders/rules here
    ],
  },
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify')
    }
  },
};
