const path = require('path');
const common = require('./webpack.common');

process.env.NODE_ENV = 'development';

console.log(path.join(__dirname, '../build/public'));

module.exports = {
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, '../build/public'),
		compress: true,
		port: 8000,
		hot: true,
		proxy: {
			'/api/**': {
				target: 'http://localhost:8080',
			},
		},
	},
	resolve: {
		alias: {
			'react-dom': '@hot-loader/react-dom',
		},
	},
	...common,
};
