var assert = require('chai').assert;
var gameService = require('../lib/game/service.js')
describe('Game service', function() {



	describe('Right guess', function() {
		it('should win the game', function() {

			var game = {
				"user": "Guilherme",
				"code_length": 8,
				"num_guesses": 0,
				"solved": false,
				"created_at": new Date(),
				"game_key": "57422f95d96173101f42154e",
				"past_results": [],
				"colors": [
					"B",
					"C",
					"G",
					"R",
					"Y",
					"M",
					"O",
					"P"
				]
			}

			var guess = {
				game_key: "57422f95d96173101f42154e",
				code: "BCGRYMOP"

			}

			game = gameService.check_game(guess, game);

			assert.equal('You win', game.result);
			assert.equal(true, game.solved);
		});
	});


	describe('Wrong Guess', function() {
		it('should return  4 near and 4 exacts', function() {
			var game = {
				"user": "Guilherme",
				"code_length": 8,
				"num_guesses": 0,
				"solved": false,
				"created_at": new Date(),
				"game_key": "57422f95d96173101f42154e",
				"past_results": [],
				"colors": [
					"B",
					"C",
					"G",
					"R",
					"Y",
					"M",
					"O",
					"P"
				]
			}

			var guess = {
				game_key: "57422f95d96173101f42154e",
				code: "BCGRPOMY"

			}

			game = gameService.check_game(guess, game);

			assert.equal(4, game.result.near);
			assert.equal(4, game.result.exact);
			assert.equal(false,game.solved);
		});
	});
});