var resolve = require('path').resolve;

exports.public_dir = resolve(__dirname, '../../public');
exports.view_dir = resolve(__dirname, '../views');

exports.port = process.env.PORT || 7070;

exports.db = {
	mongo: process.env.MONGODB_URI || 'mongodb://heroku_hcdp9s7x:g023kk2atgordoqb0k9s1h4jk1@ds011903.mlab.com:11903/heroku_hcdp9s7x'
};