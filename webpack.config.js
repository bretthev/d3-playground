const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
  },
  output: {
    filename: "bundle.js"
  },
  module: {
       loaders: [
            {test: /\.css$/, loaders: ['style', 'css']},
            {test: /\.scss$/, loader: "style!css!sass" },
       ]
   },
  resolve: {
   extensions: ['', '.js', '.json', '.scss', '.css']
 },
 resolveLoader: {
  root: path.join(__dirname, 'node_modules')
  }
}
