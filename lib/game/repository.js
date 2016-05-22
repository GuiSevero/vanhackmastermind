var Game = require('./game')
var _ = require('underscore')
var colors = ["R","B","G","Y","O","P","C","M"];


exports.new_game = new_game;
exports.all = all;
exports.find = find;
exports.save = save;

function new_game(body, cb) {

	var model = {
		user: body.user,
		colors: _.shuffle(colors),
		code_length: colors.length,
		num_guesses: 0,
		past_results: [],
		solved: false,
		created_at: new Date()
	}
	var game = new Game(model);
	return game.save(cb);
}

function save(game, cb) {
	return game.save(cb)
}


function find(body, cb) {

	return Game.findOne({_id: body.game_key},cb)
}


function all (cb) {
	return Game.find({}, cb);
}