var express = require('express');
var router = express.Router();
var SessionAuth = require('./../authentications/SessionAuth');
var playlist = require('./../controllers/PlaylistController');

/* GET home page. */

router.route('/')
	// Get all playlists created by user
	.get(SessionAuth.isLoggedIn, playlist.getMine)
	// Create new playlist
	.post(/*SessionAuth.isLoggedIn, */playlist.create);
router.route('/:id')
	// Get all playlist with playlist_id
	.get(SessionAuth.isLoggedIn, playlist.getThis)
	// Edit playlist with playlist_id
	.put(/*SessionAuth.isLoggedIn, */playlist.edit);


module.exports = router;
