const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require("webpack");

module.exports = {
  mode: "development",
  devtool:"inline-source-map",
  
  entry: {
    main: ["./src/users.ts"],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {

    rules: [

    {
      test: /\.css$/,
      include: path.join(__dirname, 'src/view/css'),
      use: [
        'style-loader',
        {
          loader: 'typings-for-css-modules-loader',
          options: {
            modules: true,
            namedExport: true
          }
        }
      ]
    },
    { test: /\.ts?$/, loader: "ts-loader" },
   ],
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    sourceMapFilename: "index.js.map",
    publicPath: "/dist/",
  },
  plugins: [new HtmlWebpackPlugin({
    template:"public/index.html"
  })],


  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".ts", ".js"],
  },
  // watch: true,
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "css-loader",
      },
      
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.ts?$/, loader: "ts-loader" },
      
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    compress: true,
    hot: true,
    watchContentBase: true,
    port: 9000,
    open: true,
  },
};
