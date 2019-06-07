// console.log("Haykuhi Mkrtchyan");


// var os = require("os");
// var message = "The platform is ";

// function main(){
//    console.log(message + os.platform());
// }
// main();

// function fun(){
//     console.log(os);
// }
// fun();

// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//    res.send("Hello world");
// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });

// app.get("/Haykuhi", function(req, res){
//     res.send("Haykuhi");
//  });

var express = require("express");
var app = express();

app.use(express.static("your_project_folder_name"));

app.get("/", function(req, res){
    res.send("<h1>Haykuhi Mkrtchyan</h1>");
});
app.get("/name/:name", function(req, res){
    var name = req.params.name;
res.send("<h1>Hello " + name +"</h1>");
});
app.listen(8888, function(){
    console.log("Example is running on port 8888");
});

