const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: resolve(__dirname, 'src', 'index.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'main.[contanthash].js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'img-optimize-loader',
                        options: {
                            compress: {
                                mode: 'high',
                                webp: true,
                                disableOnDevelopment: true,
                                gifsircle: true
                            },
                        }
                    }
                ]
            },
            {
                test: /\.(mp3)$/i,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(mp4)$/i,
                use: [
                    'file-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src', 'index.html')
        })
    ]
}