const express = require('express');
const router = express.Router();
const postController = require('../controller/posts_controller');

// Routes
router.get("/", postController.getAllPosts); // Get all posts or posts by sender
router.get("/:id", postController.getPostById); // Get a specific post by ID
router.post("/", postController.createNewPost); // Create a new post
router.put("/:id", postController.updatePost); // Update a specific post by ID
router.delete("/:id", postController.deletePost); // Delete a specific post by ID

module.exports = router;
