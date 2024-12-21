const postModel = require("../models/posts_model");

const getAllPosts = async (req, res) => {
    const senderIdFilter = req.query.sender;
    try {
        const posts = senderIdFilter
            ? await postModel.find({ sender: senderIdFilter })
            : await postModel.find();
        res.status(200).send(posts);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getPostById = async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await postModel.findById(postId);
        res.status(200).send(post);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const createNewPost = async (req, res) => {
    const post = req.body;
    try {
        const newPost = await postModel.create(post);
        res.status(201).send(newPost);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deletePost = async (req, res) => {
    const postId = req.params.id;
    try {
        await postModel.findByIdAndDelete(postId);
        res.status(200).send("Post deleted successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updatePost = async (req, res) => {
    const postId = req.params.id;
    const updatedData = req.body;
    try {
        const updatedPost = await postModel.findByIdAndUpdate(postId, updatedData, { new: true });
        if (!updatedPost) {
            return res.status(404).send("Post not found");
        }
        res.status(200).send(updatedPost);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = { getAllPosts, getPostById, createNewPost, deletePost, updatePost };

