const express = require('express');
const router = express.Router();
const commentController = require('../controller/comments_controller');

router.get("/",commentController.getAllCommentsByPostId); // route to get all comments of a post by post id




module.exports = router; // Export the router object