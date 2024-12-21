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

module.exports = { getAllCommentsByPostId };