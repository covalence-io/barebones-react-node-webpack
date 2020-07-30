const path = require('path');
const nodeExternals = require('webpack-node-externals');

let serverConfig = {
	mode: process.env.NODE_ENV || 'development',
	entry: './server/server.js',
	output: {
		path: path.join(__dirname, './dist/'),
		filename: 'server.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	externals: [nodeExternals()],
	target: 'node',
	node: {
		__dirname: false
	}
};

let clientConfig = {
	mode: process.env.NODE_ENV || 'development',
	entry: './client/index.jsx',
	output: {
		path: path.join(__dirname, './public/js/'),
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};

module.exports = [serverConfig, clientConfig];
