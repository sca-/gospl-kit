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
              modules: true,
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