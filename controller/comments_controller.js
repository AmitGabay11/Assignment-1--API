const commentModel = require("../models/comments_model");

const getAllCommentsByPostId = async (req, res) => {
    const postId = req.query.postId;
    try {
        if (postId) {
            const comments = await commentModel.find({ postId: postId });
            res.status(200).send(comments);
        } else {
            const comments = await commentModel.find();
            res.status(200).send(comments);
        }

    } catch (error) {
        res.status(400).send(error.message);
    }
};

const createNewComment = async (req, res) => {
    const comment = req.body;
    try {
        const newComment = await commentModel.create(comment);
        res.status(201).send(newComment);
    } catch (error) {
        res.status(400).send(error);
    }
};  

const getCommentByCommentId = async (req, res) => { 
    const commentId = req.params.id; 
    try { 
        const comment = await commentModel.findById(commentId)
        res.status(200).send(comment);
    }   
    catch (error) { 
        res.status(400).send(error.message);
    }   
};  

const updateComment = async (req, res) => {
    const commentId = req.params.id; // Extract comment ID from request parameters
    const { content } = req.body; // Extract updated content from request body

    try {
        // Update the comment by ID and return the updated document
        const updatedComment = await commentModel.findByIdAndUpdate(  commentId,{ content },{ new: true }); 
        // Check if the comment was found and updated
        if (!updatedComment) {
            return res.status(404).send("Comment not found");
        }
        // Send the updated comment as a response
        res.status(200).send(updatedComment);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = { getAllCommentsByPostId, createNewComment, getCommentByCommentId, updateComment };