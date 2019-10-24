const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const StartServerPlugin = require('start-server-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = merge(
	{},
	{
		entry: './src/server.ts',
		mode: 'development',
		devtool: 'sourcemap',
		target: 'node',
		externals: [nodeExternals()],
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js']
		},
		plugins: [new webpack.NamedModulesPlugin(), new webpack.NoEmitOnErrorsPlugin()],
		output: {
			filename: 'server.js',
			path: path.resolve(__dirname, '..', '..', 'dist')
		}
	}
)
