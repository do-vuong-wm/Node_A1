var express = require('express');
var app = express();
var morgan = require('morgan');

var hostname = 'localhost';
var port = 3000;

app.use(morgan('dev'));

var leaderRouter = require('./leaderRouter');
var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');

app.use('/leadership', leaderRouter);
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);


app.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});