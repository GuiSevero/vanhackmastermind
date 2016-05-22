var mongoose = require("mongoose");
var config = require("../app/config.js")

mongoose.connect(config.db.mongo);

var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;

var GuessResult = new mongoose.Schema({
	exact: Number,
	guess: String,
	near: Number
});

var Game = new mongoose.Schema({
	colors: ["R", "B", "G", "Y", "O", "P", "C", "M"],
	code_length: Number,
	guess: String,
	game_key: {
		type: String,
		get: function() {
			return this._id;
		}
	},
	num_guesses: Number,
	past_results: [GuessResult],
	solved: Boolean,
	result: Mixed,
	time_taken: Number,
	user: String,
	created_at: Date,
	updated_at: Date
})

Game.post('save', middleware)
Game.post('findOne', middleware)

function middleware (doc, next) {
	doc.game_key = doc._id;
}

module.exports = mongoose.model('Game', Game);