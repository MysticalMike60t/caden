const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./example/src/index.js", // Your entry point
  mode: "development", // Development mode
  output: {
    path: path.resolve(__dirname, "./example/public"), // Output directory
    filename: "bundle.js", // Output bundle filename
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-modules-commonjs"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Process CSS files
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "**/*.css", to: "../../lib/[path][name][ext]", context: "src" },
      ],
    }),
  ],
};