const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/main'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
         new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),

    ]
}