var _ = require('underscore')

exports.check_game = check_game;

function check_game(guess, game) {

	game.guesses++;


	if (!check_time(game.created_at.getTime())) {
		game.result = "Game timeout has reached";
		game.solved = false;
		return game;
	}

	var guess_result = check_guess(guess, game);
	game.past_results.push(guess_result);

	if (guess_result.exact == game.colors.length) {
		game.solved = true;
		game.result = "You win";
		game.time_taken = time_taken(game);
		return game;
	}

	game.result = {
		exact: guess_result.exact,
		near: guess_result.near
	}

	return game;

};


function check_time(time) {
	var now = new Date().getTime();
	return (now - time <= 300000); //5 min
}

function time_taken(game) {
	var now = new Date().getTime();
	var start = game.created_at.getTime();

	return (now - start) / (60 * 1000); // in minutes 
}


function check_guess(guess, game) {
	var result = {
		exact: 0,
		guess: guess.code,
		near: 0
	}

	var colors = game.colors;
	var codeArr = guess.code.split('');

	if (guess.code == colors.join('')) {
		result.exact = 8;
		result.near = 0;
		return result;
	}


	codeArr.forEach(function(element, index, array) {
		if(element == colors[index]) {
			result.exact++;
		}

		if(_.contains(colors, element)){
			result.near++;
		}
	});

	result.near = result.near - result.exact;

	return result;

}