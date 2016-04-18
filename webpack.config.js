module.exports = [{
  entry: {
    app: './index'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        },
        exclude: ['/node_modules/']
      }
    ]
  },
  private: true
}];

