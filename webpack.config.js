const path = require("path");

module.exports = {
  devtool: "source-map", // generates .js.map source map and .js bundle
  // devtool: "inlline-source-map", // generates single .js bundle
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"], // use this to load .js.map source maps
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    // publicPath: "public", // not needed so far
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
