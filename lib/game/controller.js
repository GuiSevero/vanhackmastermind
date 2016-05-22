var repository = require('./repository.js')
var service = require('./service.js')

exports.index = function(req, res) {

	repository.all(function(err, games){
		if(err) res.send(500, err);

		res.send(games);

	})
}

exports.new_game = function(req, res) {
	repository.new_game(req.body, function(err, game) {
		if(err) res.send(500);

		res.send(game);
	});

}


exports.guess = function(req, res) {

	repository.find(req.body, function(err, game){
		game.game_key = game._id;

		if(game.solved){

			return res.send({
				result: "Game already solved",
				winner: game.user,
				time_taken: game.time_taken,
				code: game.colors.join('')
			});
		}

		game = service.check_game(req.body, game);
		repository.save(game, function(err, game) {
			if(err) res.send(500, err);

			res.send(game);

		})

	})
}