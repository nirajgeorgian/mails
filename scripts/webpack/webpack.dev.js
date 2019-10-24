const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const StartServerPlugin = require('start-server-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = merge(
	{},
	{
		entry: './src/server.ts',
		watch: true,
		mode: 'development',
		devtool: 'sourcemap',
		target: 'node',
		externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],
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
		plugins: [
			new StartServerPlugin({
				name: 'server.js',
				nodeArgs: ['--inspect']
			}),
			new webpack.NamedModulesPlugin(),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoEmitOnErrorsPlugin()
		],
		output: {
			filename: 'server.js',
			path: path.resolve(__dirname, '..', '..', 'dist')
		}
	}
)
