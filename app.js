
// Require the modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();

app.set("view engine","ejs");
// use the body-parser module
app.use(bodyParser.urlencoded({extended : true}));
// use the static folder : folder containing css files
app.use(express.static("public"));

var calculationDone = false;
var tip;
var total;

// to tackle get response from user
app.get("/",function(req,res){

    res.render("index",{isSubmit:calculationDone,tip:tip,total:total});
});

app.post("/",function(req,res){

    var amount = req.body.amount;
    var exp = req.body.experience;
    var people = req.body.people;
    var expVal;
    
    if(exp == 5){
        expVal = 20;
    }else if(exp == 4){
        expVal = 15;
    }else if(exp == 3){
        expVal = 12;
    }else if(exp == 2){
        expVal = 10;
    }else{
        expVal = 8;
    }
    
    
    tip = amount * expVal*0.01;
    total = parseFloat(amount)+parseFloat(tip);
       
    
    calculationDone = true;
    
    
    res.render("index",{isSubmit:calculationDone,tip:tip,total:total});
    calculationDone = false;

})

// to listen to requests and run server 
app.listen(3000,function(){
    console.log("Server running at port 3000...");
    
});


