const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
require('dotenv').config();




const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (err){
    console.log("MongoDB connection error");
  }
};
connectDB();


app.use(express.urlencoded({ extended: true }));
const methodOverride = require('method-overide');
app.use(methodOveride('_method'));




// home test route 
app.get ('/test',(req, res)=> {
    res.send("server is working ")
}); 


app.listen(3000, () => {
    console.log("Server reunning on port 3000")
});