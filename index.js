const express = require('express');
const  mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();

const app = express();
mongoose.Promise = global.Promise;
// terminal command connect mongoose: node index.js
mongoose.connect('mongodb+srv://William:wxw201314@cluster0-s7nqw.mongodb.net/carpool?retryWrites=true&w=majority').then(()=>{
    console.log("~.~ Database Connected.");
}).catch(err=>{
    console.log(err)
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
const UserRouter = require('./routed/post');
app.use('/User',UserRouter);

const port = process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});