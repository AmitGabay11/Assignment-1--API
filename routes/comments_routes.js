const express = require('express');
const router = express.Router();
const commentController = require('../controller/comments_controller');

router.get("/",commentController.getAllCommentsByPostId); // route to get all comments of a post by post id
router.get("/:id",commentController.getCommentByCommentId); // route to get a comment by comment id
router.post("/",commentController.createNewComment); // route to create a new comment



module.exports = router; // Export the router object