
const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
require('dotenv').config();
app.set('view engine', 'ejs');





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
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const Quote = require('./models/Quotes.js');



// home test route 
app.get ('/test',(req, res)=> {
    res.send("server is working ")
}); 

// INDEX ROUTE - Show all quotes
app.get('/quotes', async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.render('index.ejs', { quotes });
  } catch (err) {
    console.log(err);
    res.send("Error loading quotes");
  }
});

// NEW ROUTE - Show form to create a new quote
app.get('/quotes/new', (req, res) => {
  res.render('new.ejs');
});

// CREATE ROUTE - Add a new quote to the database
app.post('/quotes', async (req, res) => {
  try {
    await Quote.create(req.body);
    res.redirect('/quotes');
  } catch (err) {
    console.log(err);
    res.send("Error creating quote");
  }
});

// SHOW ROUTE — Show details for one quote
app.get('/quotes/:id', async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
    res.render('show.ejs', { quote });
  } catch (err) {
    console.log(err);
    res.send("Error loading quote");
  }
});



app.listen(3000, () => {
    console.log("Server reunning on port 3000")
});