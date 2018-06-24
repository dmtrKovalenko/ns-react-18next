const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'demo', 'index.tsx'),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'demo', 'public', 'index.html')
    })
  ],

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { 
        test: /\.tsx?$/, 
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: ['react-hot-loader/babel'],
            },
          },
          'awesome-typescript-loader',
        ],
      },

      {
        test: /\.json/,
        type: 'javascript/auto',
        use: [require.resolve('json-loader')],
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
};
