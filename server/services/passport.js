const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// A passport strategy is a method for authenticating a user. For example,
// We can use one strategy to authenticate a user by using a JWT or
// We can use another strategy to authenticate a user by its username and password or
// We can use another strategy to google login.

//Create local strategy for login
// Tell LocalStrategy that get access to email as a username
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function (
	email,
	password,
	done
) {
	// verify the username and password, call done with the user
	// if is a correct ones
	// otherwise call done with false
	User.findOne({ email: email }, function (error, user) {
		if (error) {
			return done(error);
		}
		if (!user) {
			return done(null, false);
		}

		// compare passwords - is `password` equal to `user.password`?
		user.comparePassword(password, function (error, isMatch) {
			if (error) {
				return done(error);
			}
			if (!isMatch) {
				return done(null, false);
			}
			// passport will take a user and assigns it to req.user
			return done(null, user);
		});
	});
});

// Setup options for Jwt Strategy
const jwtOptions = {
	// Where is a request to find jwt. Is it in header, body or ...?
	// jwt we are looking for located in the request header with name of `authorization`
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.SECRET_KEY,
};

// Create Jwt Strategy
// payload: is a decoded jwt token.
// done: is a callback function which needs to be called rely on wether we successfully authenticate the use or not.

const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
	// See if the user ID and the payload exists in the DB
	// if yes, call `done` with that user
	// otherwise, call done without a user object.
	User.findById(payload.sub, function (error, user) {
		// user not authenticated
		if (error) {
			return done(error, false);
		}
		if (user) {
			return done(null, user);
		} else {
			// the was not error while searching user but user not found
			return done(null, false);
		}
	});
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
