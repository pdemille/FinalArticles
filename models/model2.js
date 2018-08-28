
var mongoose = require("mongoose");
// Create schema for mongoose npm
var Schema = mongoose.Schema;

// Create schema for NOTE: articles, comments, and dates
var NoteSchema = new mongoose.Schema({
	articleId: {
		type: String
	},
	comment: {
		type: String
	},
	createdAt: {
		type: Date, 
		default: Date.now
	}
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;