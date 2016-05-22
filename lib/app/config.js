var resolve = require('path').resolve;

exports.public_dir = resolve(__dirname, '../../public');
exports.view_dir = resolve(__dirname, '../views');

exports.port = process.env.PORT || 7070;

exports.db = {
	mongo: process.env.MONGODB_URI
};