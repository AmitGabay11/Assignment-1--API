const postModel= require("../models/posts_model");

const getAllPosts= async (req,res)=>{
        const senderIdFilter=req.query.sender
        try {
                if(senderIdFilter){
                        const posts=await postModel.find({sender:senderIdFilter});
                        res.status(200).send(posts);
                }else{
                        const posts=await postModel.find();
                        res.status(200).send(posts);
                }
            
        }catch (error) {
            res.status(400).send(error.message);
        }
};

const getPostById=async (req,res)=>{
        const postId=req.params.id;
        try{
                const post= await postModel.findById(postId);
                res.status(200).send(post);
        }catch(error){
                res.status(400).send(error.message);            
        }
        
};



module.exports={getAllPosts,getPostById};