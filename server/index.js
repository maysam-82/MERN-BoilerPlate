const express = require('express');
const http = require('http');

// middleware of express
const bodyParser = require('body-parser');

// middleware of express
const morgan = require('morgan');

// Create an instance of express
const app = express();
const mongoose = require('mongoose');
const router = require('./router');
const cors = require('cors');
//  DB setup
mongoose.connect('mongodb://localhost:27017/auth', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// App setup
// Any incomming request will be passed into morgan and bodyParser as middlwares.
// Morgan is a logging framework which shows all request in the terminal
// BodyParser will parse all incomming requestes to json no matter what the request type is.
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);
// Server Setup
const port = process.env.PORT || 3090;

// Create server
// Working with low level of http request that are comming.
// Create an http server that knows how to receive request and anything that comes in, put it in express application.
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on port ', port);
