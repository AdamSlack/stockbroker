// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Users', new Schema({ 
    name: {type: String, lowercase: true, index: {unique: true}}, 
    password: String, 
    admin: Boolean 
}));