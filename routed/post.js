const express = require('express');
const  mongoose  = require('mongoose');
const router = express.Router();
require('../module/User');
const User = mongoose.model('user');

router.post('/post',(req,res)=>{
    const userPost = new User({
        username: req.body.username,
        contact: req.body.contact,
        startloc: req.body.startloc,
        arriveloc: req.body.arriveloc,
        date: req.body.date,
        time: req.body.time,
        detail: req.body.detail,
    });
    userPost.save(function(err){
        if (err){
            res.send(err);
        }
        else {
            res.send(userPost);
        }
    })
});
router.get('/getPosts',(req,res)=>{
    User.find({}).then((posts, err)=>{
        if (err){
            res.send(err);
        }
        else {
            console.log(posts);
            res.send(posts);
            //res.send('~.~ The post send successfully');
        }
    });
});

router.get('/getPosts/byloc',(req,res)=>{
    User.find({startloc:req.body.startloc,arriveloc:req.body.arriveloc}).then((posts, err)=>{
        if (err){
            res.send(err);
        }
        else {
            res.send(posts);
            //res.send('~.~ The post send successfully');
        }
    });
});
router.get('/removepost',(req,res)=>{
    User.find({_id: req.body._id}).then((posts, err)=>{
        if (err){
            res.send(err);
        }
        else {
            //db.col.remove({"_id": posts});
            User.deleteOne({ _id: posts }, function (err) {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send('~.~ The post has been removed');
                }
                // deleted at most one tank document
            });
            //res.send(posts);
            //res.send('~.~ The post send successfully');
        }
    });
});
module.exports = router;