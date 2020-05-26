const mongoose = require('mongoose');

// Tell mongoose about very particular fileds that models going to have
const Schema = mongoose.Schema;

// Define a model
const userSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	password: String,
});

// Create the model class (Class of users)
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
