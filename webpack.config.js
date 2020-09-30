const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require('webpack-node-externals');
const path = require("path");

const serverConfig = {
    entry: "./server/main.js",
    output: {
        filename: '[name].js',
        path: __dirname + "/dist"
    },
    module: {
        rules: [
            {
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}   
        ]
    },
    externals: [
        nodeExternals()
	],
	node: {
		__dirname: false
	}
};

const clientConfig = {
    entry: "./client/index.js",
    output: {
        filename: '[name].js',
		path: __dirname + "/dist/public",
		publicPath: "/static/"
    },
    module: {
        rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					"file-loader"
				],
			},
		],
    },
    plugins: [
		new HtmlWebpackPlugin({
			template: "./client/index.html",
			filename: "./index.html"
		})
	]
}

module.exports = [clientConfig, serverConfig];