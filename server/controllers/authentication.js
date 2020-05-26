const User = require('../models/user');
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
			return res.json({ user });
		});
	});
};
