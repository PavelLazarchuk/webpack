require('@babel/polyfill');
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = env => {
	const isDEV = env.NODE_ENV === 'development';

	return {
		devtool: isDEV ? '' : 'source-map',
		stats: {
			chunks: true,
			chunkModules: true,
			colors: true,
		},
		entry: {
			main: ['@babel/polyfill', './src/index.js'],
		},
		output: {
			path: path.join(__dirname, '/build'),
			filename: 'static/js/[name].[hash].js',
			chunkFilename: 'static/js/[name].[hash].js',
			publicPath: '/',
		},
		devServer: {
			historyApiFallback: true,
			overlay: true,
			port: 3001,
			hot: true,
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)?$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					},
				},
				{
					test: /\.css$/,
					use: [isDEV ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
				},
				{
					test: /\.(png|jpe?g|gif|svg)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'static/img/[name].[ext]',
							},
						},
						'img-loader',
					],
				},
			],
		},
		plugins: isDEV
			? [
					new HtmlWebpackPlugin({
						template: './public/index.html',
						filename: 'index.html',
						inject: 'body',
						minify: false,
						chunksSortMode: 'auto',
					}),
					new webpack.HotModuleReplacementPlugin(),
					new webpack.NoEmitOnErrorsPlugin(),
			  ]
			: [
					new CleanWebpackPlugin(),
					new HtmlWebpackPlugin({
						template: './public/index.html',
						filename: 'index.html',
						inject: 'body',
						minify: {
							collapseWhitespace: true,
						},
						chunksSortMode: 'auto',
					}),
					new InjectManifest({
						swSrc: path.resolve(process.cwd(), 'public/service-worker.js'),
						swDest: "service-worker.js",
					}),
					new MiniCssExtractPlugin({
						filename: 'static/css/[name].[hash].css',
						chunkFilename: 'static/css/[name].[hash].css',
					}),
					new CopyPlugin({
						patterns: [
							{ from: 'public/manifest.json', to: '' },
						],
					}),
			  ],
		optimization: {
			splitChunks: {
				chunks: 'all',
				minChunks: 2,
			},
			minimizer: [
				new UglifyJsPlugin({
					exclude: 'service-worker.js',
					uglifyOptions: {
						warnings: false,
						compress: {
							unused: true,
							dead_code: true,
						},
					},
					sourceMap: true,
				}),
				new ImageMinPlugin({
					test: /\.(png|jpe?g|gif|svg)$/,
				}),
				new OptimizeCSSAssetsPlugin({}),
			],
		},
		resolve: {
			modules: [path.resolve(__dirname, './src'), 'node_modules'],
			extensions: ['.js', '.jsx'],
			alias: {
				hoc: path.resolve(__dirname, './src/hoc'),
				store: path.resolve(__dirname, './src/store'),
				utils: path.resolve(__dirname, './src/utils'),
				pages: path.resolve(__dirname, './src/pages'),
				shared: path.resolve(__dirname, './src/shared'),
				services: path.resolve(__dirname, './src/services'),
				components: path.resolve(__dirname, './src/components'),
			},
		},
	};
};
