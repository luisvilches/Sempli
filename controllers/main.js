const Post = require('.././models/post');
const cloudinary = require('cloudinary');
const sempli = require('../sempli')


exports.index = (req,res,next) => {
	res.send({message: 'Hello Sempli!!'});
}

exports.test = (req,res) => {
	sempli.response(res,200,req.files);
}