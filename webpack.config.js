const path = require("path");

module.exports = {
  entry: "./src/index.js", // Your entry point
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
};
