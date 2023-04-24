const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
var path = require('path');

const app=express();
let posts=[];
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'))
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/',(req,res)=>{
    res.render('home',{homepost:posts});
})


app.get('/compose',(req,res)=>{
    res.render('compose')
})


app.post('/compose',(req,res)=>{
    const post={
        title:req.body.blogtitle,
        content:req.body.blogcontent
    }
    posts.push(post);
    res.redirect('/');
})

app.listen(3000,(req,res)=>{
    console.log("server started at port 3000");
})

