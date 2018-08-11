var path = require("path");

module.exports = {
  entry: "./src/index.tsx",

  module: {
    rules: [
      {
        exclude: [/node_modules/],
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",
        options: {
          presets: ["env", "react"]
        },
        test: /\.(js|jsx)$/,
      },
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        use: [
          { loader: "awesome-typescript-loader" }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ]
      }
    ]
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
  },

  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"]
  },

  devServer: {
    compress: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
    contentBase: './public'
  },
};
