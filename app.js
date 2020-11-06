
// Require the modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();

// use the body-parser module
app.use(bodyParser.urlencoded({extended : true}));
// use the static folder : folder containing css files
app.use(express.static('public'));


// to tackle get response from user
app.get("/",function(req,res){

    res.sendFile(__dirname+"/index.html");
});


// to listen to requests and run server 
app.listen(3000,function(){
    console.log("Server running at port 3000...");
    
});
