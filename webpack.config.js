const path = require('path');

const config = {
  
  entry: './lib/components/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules:
    [
      { test: /\.js$/, exclude:'/node_modules', use: 'babel-loader' },
      { test: /\.css$/, use: 'style-loader' },
      { test: /\.css$/, use: 'css-loader' },
      {
            test: /\.(png|jp(e*)g|svg)$/,  
            use: [{
                loader: 'url-loader',
                options: { 
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                } 
            }]
        }
      
    ]
    
  }
};

module.exports = config;