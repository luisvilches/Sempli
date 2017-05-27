const mongoose = require('mongoose')
let Schema = mongoose.Schema;

let Post = new Schema({
	title: String,
    content: String,
    img: String,
	date: Date
})

module.exports = mongoose.model('Post', Post)
