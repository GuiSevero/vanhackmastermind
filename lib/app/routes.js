var express = require('express')
var router = express.Router()
var game_controller = require('../game/controller.js')

router.post('/new_game', game_controller.new_game)
router.post('/guess', game_controller.guess)

//Home
router.get('/', game_controller.index)

module.exports = router