const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
// Tell mongoose about very particular fileds that models going to have
const Schema = mongoose.Schema;

// Define a model
const userSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	password: String,
});

// On save hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function (next) {
	// access to the context which is UserModel. user is an instance of a UserModel
	const user = this;

	// generate salt. It take some time and then run callback.
	bcrypt.genSalt(10, function (error, salt) {
		if (error) {
			return next(error);
		}

		// hash (encrypt) password using the salt. it takes some time to run and then run a callback.
		bcrypt.hash(user.password, salt, null, function (error, hash) {
			if (error) {
				return next(error);
			}
			// overwrite plain text password with an encrypted one.
			user.password = hash;
			// save a model.
			next();
		});
	});
});

// Add a method to user model to compare a password for us
userSchema.methods.comparePassword = function (canditatePassword, callback) {
	bcrypt.compare(canditatePassword, this.password, function (error, isMatch) {
		if (error) {
			return callback(error);
		}
		callback(null, isMatch);
	});
};

// Create the model class (Class of users)
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
