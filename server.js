const express = require('express');
const app = express();

// home test route 
app.get ('/test',(req, res)=> {
    res.send("server is working ")
}); 

app.listen(3000, () => {
    console.log("Server reunning on port 3000")
});