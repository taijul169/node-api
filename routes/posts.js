const mongoose =  require("mongoose");
const express =  require('express');
const router = express.Router();
const Post = require("../models/model");
const { rawListeners } = require("../models/model");


// getting all the post 
router.get('/posts',async(req,res)=>{
    try {
        const allpost = await Post.find();
        res.json(allpost)
    } catch (error) {
        res.json({message: error}) 
    }

})
// Creating post

router.post('/create',async(req,res)=>{
   const post = new Post({
       title:req.body.title,
       description:req.body.description
   });
   try {
     const savedPost = await post.save();
     res.json(savedPost);
   } catch (error) {

    res.json({message: error}) 
   }
})

// get a specific post by id
router.get("/post/:postId", async(req,res)=>{
    console.log(req.params.postId);
   try {
    const singlePost = await Post.findById(req.params.postId);
    res.json(singlePost);
   } catch (error) {
    res.json({message: error}) 
   }
})
// Delete a specific post by id
router.delete("/post/:postId", async(req,res)=>{
   try {
    const deletePost = await Post.deleteOne({_id: req.params.postId});
    if(deletePost){
        res.json({message:"Post has been deleted!!"});
    }
   } catch (error) {
    res.json({message: error}) 
   }
})
// Update a specific post
router.patch("/post/:postId", async(req,res)=>{
    try {
     const updatedPost = await Post.updateOne({_id: req.params.postId},{$set:{title:req.body.title,description:req.body.description}});
     if(deletePost){
         res.json({message:"Post has been Updated!!"});
     }
    } catch (error) {
     res.json({message: error}) 
    }
 })

module.exports =  router;