const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"  
            },
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|jp(e?)g|png)$/,
		    loader: 'file-loader'
      }
    ]
  }
};