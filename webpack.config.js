const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require('webpack-node-externals');
const path = require("path");

module.exports = {
	entry: {
		server: "./server/main.js",
		client: "./client/index.js"
	},
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
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./client/index.html",
			filename: "./index.html",
			chunks: ["client"]
		})
	],
	externals: [
		nodeExternals()
	]
}; 
