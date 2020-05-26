const Authentication = require('./controllers/authentication');

// pass through passport to the incomming request to make sure whether user is authenticated or not.
const passportService = require('./services/passport');
const passport = require('passport');

// helper (middleware)for any route we need to be authenticated.
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function (app) {
	// if user visits the app with `/` route, then run callback function.
	// req: (request) is an object that represent that incomming http request.
	// res: (response) is an object that represent the respons which we are going to send back to that request.
	// next: used for error handling.
	// app.get('/', function (req, res, next) {
	// 	res.send([1, 2, 3, 4, 5]);
	// });
	app.get('/', requireAuth, function (req, res) {
		res.send({ hi: 'there' });
	});
	app.post('/signup', Authentication.signup);
};
