var path = require("path");

module.exports = {
 mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        }
    ]
  },
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname
  },
  performance: {
    hints: false
  }
};
