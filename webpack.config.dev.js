const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'js/bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    devServer: {
        open: false,
        hot: true,
        inline: true,
        port: 3000,
        historyApiFallback: true,
        proxy: {
            '/api/questions': "http://localhost:5000"
        }
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

}