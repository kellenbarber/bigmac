const path = require('path');

module.exports = {
	entry: {
		server: './server/main.js',
		client: './client/index.js'
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	}
}; 
