
module.exports = {
  entry: `${__dirname}/src/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: `${__dirname}/src`,
        use: { 
          loader:'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        include: `${__dirname}/src`,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]'
            }
          }
        ]
      }
    ]
  }
};