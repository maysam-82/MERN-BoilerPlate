const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	// sub is short for subject. the subject of the token belongs to user.id.
	// iat: means `issued at time`.
	return jwt.encode({ sub: user.id, iat: timestamp }, config.SECRET_KEY);
}

exports.signin = function (req, res, next) {
	// user has already had their email and password auth'd
	// we just need to give them a token
	// passport will take a user and assigns it to req.user
	res.send({ token: tokenForUser(req.user) });
};

exports.signup = function (req, res, next) {
	//  pull data from request by the use of body. body means anything contains with post request.
	const email = req.body.email;
	const password = req.body.password;

	if (!email || !password) {
		return res
			.status(422)
			.send({ error: 'You must provide email and password.' });
	}

	// See if a user with a given email exits
	User.findOne({ email: email }, function (error, existingUser) {
		if (error) {
			return next(error);
		}

		// if a user with email does exist, return an error
		if (existingUser) {
			return res.status(422).send({ error: 'Email has been already used' });
		}

		// if user does not exist, create and save user record.
		// create a user in memory
		const user = new User({
			email: email,
			password: password,
		});

		// save user in db
		user.save(function (error) {
			if (error) {
				return next(error);
			}

			//  respond to request that user was created.
			// send an identifying token.
			return res.json({ token: tokenForUser(user) });
		});
	});
};
