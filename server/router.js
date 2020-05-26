const Authentication = require('./controllers/authentication');
module.exports = function (app) {
	// if user visits the app with `/` route, then run callback function.
	// req: (request) is an object that represent that incomming http request.
	// res: (response) is an object that represent the respons which we are going to send back to that request.
	// next: used for error handling.
	// app.get('/', function (req, res, next) {
	// 	res.send([1, 2, 3, 4, 5]);
	// });

	app.post('/signup', Authentication.signup);
};
