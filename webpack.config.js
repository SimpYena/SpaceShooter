const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "assets"),
    },
    client: {
      overlay: false,
    },
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      inlineSource: ".(js|css)$",
    }),
    new CopyPlugin({
      patterns: [{ from: "assets" }],
    }),
  ],
  devServer: {
    static: "./dist",
  },
  devtool: "inline-source-map",
};
