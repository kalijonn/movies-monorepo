const path = require('path');
const common = require('./webpack.common');

process.env.NODE_ENV = 'production';

module.exports = {
	mode: 'production',
	watch: false,
	...common,
};
