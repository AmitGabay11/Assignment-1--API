const express = require('express');  // Import express PACKAGE
const router = express.Router();  // Create a router object
const postController = require('../controller/posts_controller');  // Import the posts_controller.js file

//Home page route
router.get("/",postController.getAllPosts);  // route to get all posts
router.get("/:id",postController.getPostById);  // route to get a post by a specific id

router.post("/",postController.createNewPost);  //route to create a new post
router.delete("/:id",postController.deletePost);  //route to delete a post by a specific id



module.exports = router;  // Export the router object