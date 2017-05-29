const sempli = require('../sempli')

exports.index = (req,res,next) => {
	res.json({message: 'Hello Sempli!!'});
}