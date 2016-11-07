var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

var dishRouter = express.Router();

var promoRouter = express.Router();

var leaderRouter = express.Router();

dishRouter.use(bodyParser.json());

promoRouter.use(bodyParser.json());

leaderRouter.use(bodyParser.json());

dishRouter.route('/')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        next();
    })

    .get(function(req,res,next){
        res.end("We'll Add the dishes");
    })

    .post(function(req, res, next){
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .delete(function(req, res, next){
        res.end('Deleting all dishes');
    });

dishRouter.route('/:dishId')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        next();
    })

    .get(function(req,res,next){
        res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
    })

    .put(function(req, res, next){
        res.write('Updating the dish: ' + req.params.dishId + '\n');
        res.end('Will update the dish: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete(function(req, res, next){
        res.end('Deleting dish: ' + req.params.dishId);
    });

// Promotion Router

promoRouter.route('/')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        next();
    })

    .get(function(req,res,next){
        res.end('<html><body><h1>Promotion in the restaurant</h1><p>Promotions:</p><br></body></html>');
    })

    .delete(function(req, res, next){
        res.end('Deleting promotion/s');
    })

    .post(function(req, res, next){

        res.write('<html><head><meta charset="UTF-8"> <title>Promotions - Restaurants</title><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></head>');
        res.write('<body><div class="alert alert-success" role="alert"><strong>Promocode: ' + req.body.promo + '</strong></div><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script></body>');
        res.end('</html>');

    });

promoRouter.route('/:Id')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        next();
    })

    .get(function(req,res,next){
        res.end('Will send details of the promotion: ' + req.params.Id +' to you!');
    })

    .put(function(req, res, next){
        res.write('Updating the promotion: ' + req.params.Id + '\n');
        res.end('Will update the promotion: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete(function(req, res, next){
        res.end('Deleting promotion/s: ' + req.params.Id);
    });

// Leadership Router

leaderRouter.route('/')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        next();
    })

    .get(function(req,res,next){

        res.end("<h1>Leadership in the restaurant</h1>");
    })

    .post(function(req, res, next){

        res.write('<html><head><meta charset="UTF-8"> <title>Leadership - Restaurante</title><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></head>');
        res.write('<body><div class="alert alert-success" role="alert"><strong>Leadership: ' + req.body.name + '</strong></div><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script></body>');
        res.end('</html>');

    })

    .delete(function(req, res, next){
        res.end('Deleting all info');
    });

leaderRouter.route('/:Id')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        next();
    })

    .get(function(req,res,next){
        res.end('Will send details of the leadership: ' + req.params.Id +' to you!');
    })

    .put(function(req, res, next){
        res.write('Updating the leadership: ' + req.params.Id + '\n');
        res.end('Will update the leadership: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete(function(req, res, next){
        res.end('Deleting leaderships: ' + req.params.Id);
    });

app.use('/dishes',dishRouter);

app.use('/promotions',promoRouter);

app.use('/leadership',leaderRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});