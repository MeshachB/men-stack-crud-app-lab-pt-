const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
require('dotenv').config();




mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });


// home test route 
app.get ('/test',(req, res)=> {
    res.send("server is working ")
}); 


app.listen(3000, () => {
    console.log("Server reunning on port 3000")
});