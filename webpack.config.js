const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webConfig=require('./config')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    open:true,
    port:webConfig.port,
    openPage:webConfig.openUrl/* '?area_id=1&area_grade=C2' */,
    contentBase: path.join(__dirname, "webapp"),
    proxy:webConfig.proxy
  },
  mode: 'development',
  entry: {
    index:webConfig.entry,
    /* vendor: ['react', 'react-dom','jquery'] */
  },
  output: {
    path: path.resolve(__dirname, 'webapp'),
    filename: webConfig.output
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src/script')],
        loader: 'babel-loader'
      }, {
        test: /\.hbs$/,
        loader: "handlebars-template-loader"
      },/*  {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },  */
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpg|ttf|eot|svg|woff|woff2)$/,
        loader: 'url-loader?limit=8192&name=build_files/[hash:8].[name].[ext]'
      }
    ]
  },
  plugins: [// extractLess,
    /*   new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "runtime"]
    }),  */
  
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
          compress: {
              warnings: false,
              drop_debugger: false,
              drop_console: true
          }
      }
  })
    ],
  externals: {
    //'react':'React', 'react-dom':'ReactDOM'
    'fish': "fish"
  }
};
