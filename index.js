var express = require('express')
var app = express()
var randomizer = require('./randomizer.js')
var sequelize = new sequelize('bfcarter_shortner', 'bfcarter_shorten', 'c92kfzmdlamn@2d',{
    host:'212.1.210.1',
    dialect:'mysql'
})

var Url = sequelize.define('url', {
    short: {
        type: sequelize.string,
    },
    long: {
        type:sequelize.string,
    }
}, {
    freezeTableName: true
});
url.sync({force;false}).then(function (){
app.get('/api/makeurl', function (req,res) {
	var random = randomizer()
	var longurl = req.query.longurl
	
	url.create({
		short:random,
		long: longurl
		})
		res.send(random)
app.listen(3000)
})