const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './src/index.tsx'),
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ['babel-loader', 'ts-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.html$/,
				use: 'html-loader',
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
				],
				sideEffects: true,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'main.[contenthash].bundle.js',
		path: path.resolve(__dirname, '../build/public'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			cache: false,
			favicon: './public/favicon.ico',
		}),
		new MiniCssExtractPlugin({
			filename: 'main.[contenthash].bundle.css',
		}),
		new ESLintPlugin(),
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: true,
		}),
	],
};
