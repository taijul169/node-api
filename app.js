const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const app = express();
const DB = require("./db/conn");
const postsRoute = require("./routes/posts");
const bodyParser = require('body-parser');


app.use(bodyParser.json());
// Middleware----
app.use('/api', postsRoute);
// Routing----
app.get('/',(req,res)=>{
    res.send("i am from home page....")
})

app.listen(port, ()=>{
    console.log("server is listening from port:",port);
})

