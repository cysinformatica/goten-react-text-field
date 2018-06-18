/*** webpack.config.js ***/

const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "example/public/index.html"),
    filename: "./index.html"
});
module.exports = {
    entry: path.join(__dirname, "example/src/index.js"),
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            }, {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.jpg$/,
                loader: "file-loader"
            }, {
                test: /\.(woff2|woff|ttf|eot)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
                loader: 'url-loader?limit=100000&name=./fonts/[hash].[ext]'
            }, {
                test: /\.(svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
                loader: 'url-loader?limit=100000&name=./imgs/[hash].[ext]'
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3000
    }
};