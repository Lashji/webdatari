const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// App Config
mongoose.connect("mongodb://localhost/datari", {
    useMongoClient : true
})

app.use(bodyParser.urlencoded({
    extended : true
}))

app.use(express.static('public'));
app.set("view engine", "ejs");

var reporSchema = new mongoose.Schema({
        'title' : String,
        'body': String,
        'user': String
});

var report = mongoose.model('report', reporSchema);


// Routes

app.get('/', function(req, res){
    var data = {
        'page' : 'index'
    }
    res.render("index", data);
});

app.get('/login', function(req, res){
    res.render("login");
});





app.listen(3000, '127.0.0.1', function () {
    console.log('server started');
});